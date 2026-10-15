import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { teamMembers } from "@/data/siteData";

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="secondary" className="mb-3">Команда</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Наши мастера</h2>
          <p className="text-muted-foreground">Сертифицированные специалисты с опытом от 7 до 14 лет.</p>
        </div>

        <ScrollArea className="w-full">
          <div className="flex gap-6 pb-4 px-1" style={{ minWidth: "min-content" }}>
            {teamMembers.map((member) => (
              <Card key={member.name} className="hover:shadow-lg transition-shadow shrink-0 w-72">
                <CardContent className="pt-6 text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-primary/10">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="text-2xl">{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                  <Separator className="my-3" />
                  <div className="space-y-2 text-sm">
                    <div className="text-muted-foreground">{member.experience}</div>
                    <Badge variant="outline" className="text-xs">{member.specialization}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default TeamSection;
