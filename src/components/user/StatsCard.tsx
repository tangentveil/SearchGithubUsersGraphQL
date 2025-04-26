import { Card, CardDescription, CardTitle } from "../ui/card";

type StateCardProps = {
  title: string;
  count: number;
};

function StatsCard({ title, count }: StateCardProps) {
  return (
    <Card>
      <div className="flex flex-row justify-between items-center p-6">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{count}</CardDescription>
      </div>
    </Card>
  );
}

export default StatsCard;
