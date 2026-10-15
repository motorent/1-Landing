import { useState } from "react";
import { Calendar as CalendarIcon, Clock, Check, User, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";
import { bookingTimeSlots, bookingDeviceTypes, bookingServiceTypes, siteImages } from "@/data/siteData";

const BookingSection = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [deviceType, setDeviceType] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const filledFields = [date, selectedSlot, deviceType, serviceType, name, phone].filter(Boolean).length;
  const progress = Math.round((filledFields / 6) * 100);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !selectedSlot || !deviceType || !serviceType || !name || !phone || !agreed) {
      toast({ title: "Заполните все поля", description: "Проверьте, что все обязательные поля заполнены.", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Заявка принята!", description: `Мы свяжемся с вами для подтверждения записи на ${format(date, "d MMMM", { locale: ru })} в ${selectedSlot}.` });
  };

  if (submitted) {
    return (
      <section id="booking" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-accent/30 shadow-lg">
              <CardHeader className="text-center">
                <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-accent/10 mb-4">
                  <Check className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Заявка успешно отправлена!</CardTitle>
                <CardDescription>
                  Мы забронировали для вас: {date && format(date, "d MMMM yyyy", { locale: ru })} в {selectedSlot}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <Alert>
                  <AlertTitle>Что дальше?</AlertTitle>
                  <AlertDescription>
                    Наш менеджер позвонит вам в течение 15 минут для подтверждения записи.
                    Подготовьте устройство и опишите проблему.
                  </AlertDescription>
                </Alert>
                <Separator />
                <Button variant="outline" onClick={() => { setSubmitted(false); setDate(undefined); setSelectedSlot(null); setDeviceType(""); setServiceType(""); setName(""); setPhone(""); setEmail(""); setAgreed(false); }}>
                  Создать новую заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="secondary" className="mb-3">Бронирование</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Запишитесь на ремонт</h2>
          <p className="text-muted-foreground">Выберите удобную дату и время. Мы подтвердим запись в течение 15 минут.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <Card className="lg:col-span-2 overflow-hidden">
            <img src={siteImages.electronicsShop} alt="Запись на ремонт" className="w-full h-40 object-cover" />
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-4">Информация о записи</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2"><CalendarIcon className="h-4 w-4 text-primary" /> <span className="text-muted-foreground">Дата:</span> {date ? format(date, "d MMMM yyyy", { locale: ru }) : "не выбрана"}</div>
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> <span className="text-muted-foreground">Время:</span> {selectedSlot || "не выбрано"}</div>
                <Separator />
                <div className="flex items-center gap-2"><Badge variant="outline">Бесплатная диагностика</Badge></div>
                <div className="flex items-center gap-2"><Badge variant="outline">Выезд в пределах МКАД</Badge></div>
                <div className="flex items-center gap-2"><Badge variant="outline">Гарантия до 2 лет</Badge></div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Форма записи</CardTitle>
              <CardDescription>Заполните все поля для бронирования</CardDescription>
              <div className="pt-2">
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">Заполнено {filledFields} из 6</p>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Дата визита</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          {date ? format(date, "d MMMM yyyy", { locale: ru }) : "Выберите дату"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          locale={ru}
                          disabled={(d) => d < new Date(new Date().setHours(0,0,0,0))}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label>Тип устройства</Label>
                    <Select value={deviceType} onValueChange={setDeviceType}>
                      <SelectTrigger><SelectValue placeholder="Выберите" /></SelectTrigger>
                      <SelectContent>
                        {bookingDeviceTypes.map((t) => (
                          <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Выберите время</Label>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {bookingTimeSlots.map((slot) => (
                      <Button
                        key={slot}
                        type="button"
                        variant={selectedSlot === slot ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedSlot(slot)}
                        className="text-xs"
                      >
                        {slot}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Тип услуги</Label>
                  <RadioGroup value={serviceType} onValueChange={setServiceType} className="grid sm:grid-cols-2 gap-2">
                    {bookingServiceTypes.map((s) => (
                      <div key={s.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={s.value} id={`s-${s.value}`} />
                        <Label htmlFor={`s-${s.value}`} className="text-sm font-normal cursor-pointer">{s.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <Separator />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" className="pl-9" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 (___) ___-__-__" className="pl-9" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email (необязательно)</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" className="pl-9" />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="agree" checked={agreed} onCheckedChange={(v) => setAgreed(!!v)} />
                  <Label htmlFor="agree" className="text-xs text-muted-foreground">
                    Я согласен на обработку персональных данных и принимаю условия сервиса
                  </Label>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Записаться на ремонт
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
