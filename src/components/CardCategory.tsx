import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function CardCategory ({title, summary, date}: {title: string, summary: string, date: string}) {
    return (
        <Card className="w-[350px] h-[290px] shadow-lg">
            <CardHeader>
                <CardTitle>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p>{summary}</p>
            </CardContent>
            <CardFooter>
                <p>{date}</p>
            </CardFooter>
        </Card>
    );
}