import { useState } from "react";
import { Star, ArrowRight, Quote } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useToast } from "@/hooks/use-toast";
import { reviews, reviewAvatars, bookingServiceTypes } from "@/data/siteData";

const REVIEWS_PER_PAGE = 3;

const ReviewsSection = () => {
  const [page, setPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [service, setService] = useState("");
  const [text, setText] = useState("");
  const { toast } = useToast();

  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);
  const currentReviews = reviews.slice((page - 1) * REVIEWS_PER_PAGE, page * REVIEWS_PER_PAGE);

  const avatarKeys = Object.keys(reviewAvatars);
  const getAvatar = (idx: number) => reviewAvatars[avatarKeys[idx % avatarKeys.length]];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !service || !text) {
      toast({ title: "Заполните все поля", variant: "destructive" });
      return;
    }
    toast({ title: "Спасибо за отзыв!", description: "Ваш отзыв будет опубликован после модерации." });
    setName(""); setRating(5); setService(""); setText(""); setShowForm(false);
  };

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="secondary" className="mb-3">Отзывы</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
          <p className="text-muted-foreground">Более 2 500 отзывов. Средняя оценка — 4.9 из 5.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {currentReviews.map((review, i) => (
            <Card key={review.name + i} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={getAvatar((page - 1) * REVIEWS_PER_PAGE + i)} alt={review.name} />
                    <AvatarFallback>{review.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{review.name}</CardTitle>
                    <CardDescription className="text-xs">{review.date}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className={`h-4 w-4 ${idx < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`} />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <Quote className="h-6 w-6 text-primary/20 mb-2" />
                <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
                <Separator className="my-4" />
                <Badge variant="outline" className="text-xs">{review.service}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <Pagination className="mb-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); setPage(p => Math.max(1, p - 1)); }} />
            </PaginationItem>
            {Array.from({ length: totalPages }).map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink isActive={page === i + 1} href="#" onClick={(e) => { e.preventDefault(); setPage(i + 1); }}>
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext href="#" onClick={(e) => { e.preventDefault(); setPage(p => Math.min(totalPages, p + 1)); }} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <div className="text-center mb-6">
          <Button variant="outline" size="lg" onClick={() => setShowForm(!showForm)}>
            {showForm ? "Скрыть форму" : "Оставить отзыв"} {!showForm && <ArrowRight className="h-4 w-4" />}
          </Button>
        </div>

        {showForm && (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Поделитесь впечатлениями</CardTitle>
              <CardDescription>Ваш отзыв поможет другим выбрать качественный сервис</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="rev-name">Ваше имя</Label>
                    <Input id="rev-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Иван Иванов" />
                  </div>
                  <div className="space-y-2">
                    <Label>Услуга</Label>
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger><SelectValue placeholder="Выберите услугу" /></SelectTrigger>
                      <SelectContent>
                        {bookingServiceTypes.map((s) => (
                          <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Оценка</Label>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <button key={i} type="button" onClick={() => setRating(i + 1)}>
                        <Star className={`h-7 w-7 transition-colors ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30 hover:text-yellow-400/50"}`} />
                      </button>
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">{rating} из 5</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rev-text">Ваш отзыв</Label>
                  <Textarea id="rev-text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Расскажите о вашем опыте обращения в наш сервис..." rows={5} />
                </div>

                <Button type="submit" size="lg" className="w-full">Опубликовать отзыв</Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
