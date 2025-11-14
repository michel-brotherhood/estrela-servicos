import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  phone: string;
  email: string;
  company?: string;
  cnpj?: string;
  service?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, email, company, cnpj, service, message }: ContactEmailRequest = await req.json();

    console.log("Recebendo solicitação de contato de:", email);

    // Email para a empresa
    const emailToCompany = await resend.emails.send({
      from: "Estrela Serviços <onboarding@resend.dev>",
      to: ["contato@estrelaservicos.com.br"],
      subject: `Novo Contato: ${name} - ${company || 'Sem empresa'}`,
      html: `
        <h2>Nova Solicitação de Contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
        ${cnpj ? `<p><strong>CNPJ:</strong> ${cnpj}</p>` : ''}
        ${service ? `<p><strong>Serviço de Interesse:</strong> ${service}</p>` : ''}
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log("Email para empresa enviado:", emailToCompany);

    // Email de confirmação para o cliente
    const emailToClient = await resend.emails.send({
      from: "Estrela Serviços <onboarding@resend.dev>",
      to: [email],
      subject: "Recebemos sua mensagem - Estrela Serviços",
      html: `
        <h1>Olá, ${name}!</h1>
        <p>Recebemos sua mensagem e entraremos em contato em breve.</p>
        <p>Nossa equipe está analisando sua solicitação e retornará o mais rápido possível.</p>
        <br>
        <p><strong>Resumo da sua mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <br>
        <p>Atenciosamente,<br><strong>Equipe Estrela Serviços</strong></p>
        <p>Telefone: (21) 3900-3056</p>
      `,
    });

    console.log("Email de confirmação para cliente enviado:", emailToClient);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Emails enviados com sucesso"
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Erro ao enviar emails:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
