import { Cpu, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Separator } from "@/components/ui/separator";
import { contactsInfo, navLinks } from "@/data/siteData";

const footerSections = [
  {
    title: "Услуги",
    links: [
      { label: "Ремонт ноутбуков", href: "#services" },
      { label: "Ремонт ПК", href: "#services" },
      { label: "Восстановление данных", href: "#services" },
      { label: "Сборка игровых ПК", href: "#services" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "О нас", href: "#about" },
      { label: "Тарифы", href: "#pricing" },
      { label: "Отзывы", href: "#reviews" },
      { label: "Контакты", href: "#contacts" },
    ],
  },
  {
    title: "Поддержка",
    links: [
      { label: "Бронирование", href: "#booking" },
      { label: "Вопросы и ответы", href: "#faq" },
      { label: "Гарантия", href: "#guarantee" },
      { label: "Статус ремонта", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Cpu className="h-5 w-5" />
              </div>
              ТехРемонт
            </a>
            <p className="text-background/70 text-sm leading-relaxed mb-6 max-w-xs">
              Профессиональный ремонт компьютеров и ноутбуков в Москве с 2012 года.
              Бесплатная диагностика. Гарантия до 2 лет. Выезд на дом.
            </p>
            <div className="space-y-2 text-sm text-background/80">
              <a href={`tel:${contactsInfo.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary" /> {contactsInfo.phone}
              </a>
              <a href={`mailto:${contactsInfo.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary" /> {contactsInfo.email}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> {contactsInfo.address}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" /> {contactsInfo.workingHours}
              </div>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-background/70 hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-background/20" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            (c) 2012-2026 ТехРемонт. Все права защищены.
          </p>
          <div className="flex items-center gap-3">
            {contactsInfo.socialLinks.map((s) => (
              <Button key={s.label} variant="ghost" size="icon" className="text-background/70 hover:text-primary hover:bg-background/10" asChild>
                <a href={s.href} aria-label={s.label}>
                  {s.icon === "MessageCircle" && <MessageCircle className="h-4 w-4" />}
                  {s.icon === "Phone" && <Phone className="h-4 w-4" />}
                  {s.icon === "Mail" && <Mail className="h-4 w-4" />}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
