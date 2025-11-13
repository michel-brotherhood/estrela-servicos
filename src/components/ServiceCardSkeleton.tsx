import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ServiceCardSkeleton = () => {
  return (
    <Card className="overflow-hidden border-border h-full flex flex-col bg-card">
      <div className="relative overflow-hidden h-56">
        <Skeleton className="w-full h-full" />
        <div className="absolute top-4 left-4">
          <Skeleton className="w-12 h-12 rounded-2xl" />
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <Skeleton className="h-6 w-3/4" />
        </div>
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        <Skeleton className="h-10 w-full mt-auto" />
      </CardContent>
    </Card>
  );
};

export default ServiceCardSkeleton;
