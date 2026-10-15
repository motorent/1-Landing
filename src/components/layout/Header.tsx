import { useState } from "react";
import { Menu, X, Phone, Cpu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/siteData";

const serviceLinks = [
  { title: "Ремонт ноутбуков", href: "#services", desc: "Все бренды и модели" },
  { title: "Ремонт ПК", href: "#services", desc: "Апгрейд и сборка" },
  { title: "Восстановление данных", href: "#services", desc: "HDD, SSD, флешки" },
  { title: "Сборка игровых ПК", href: "#services", desc: "RGB и водяное охлаждение" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#hero" className="flex items-center gap-2 font-bold text-lg shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Cpu className="h-5 w-5" />
          </div>
          <span className="hidden sm:inline">ТехРемонт</span>
          <Badge variant="secondary" className="ml-1 hidden md:inline-flex">12 лет</Badge>
        </a>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Услуги</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 p-2">
                  {serviceLinks.map((s) => (
                    <li key={s.title}>
                      <NavigationMenuLink
                        href={s.href}
                        className={cn(navigationMenuTriggerStyle(), "flex flex-col items-start h-auto py-3")}
                      >
                        <span className="font-medium">{s.title}</span>
                        <span className="text-xs text-muted-foreground">{s.desc}</span>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {navLinks.filter(l => l.href !== "#hero" && l.href !== "#services").map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink href={link.href} className={navigationMenuTriggerStyle()}>
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <a href="tel:+74951234567" className="hidden md:flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            +7 (495) 123-45-67
          </a>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#booking">Записаться</a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetTitle className="sr-only">Навигация</SheetTitle>
              <div className="flex items-center justify-between mb-6">
                <span className="font-bold text-lg flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-primary" /> Меню
                </span>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="absolute right-4 top-4">
                    <X className="h-4 w-4" />
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="px-4 py-3 rounded-lg hover:bg-accent/50 transition-colors text-sm font-medium flex items-center justify-between"
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4 -rotate-90" />
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-6 pt-6 border-t space-y-3">
                <a href="tel:+74951234567" className="flex items-center gap-2 text-sm font-medium">
                  <Phone className="h-4 w-4 text-primary" /> +7 (495) 123-45-67
                </a>
                <Button asChild className="w-full">
                  <a href="#booking">Записаться на ремонт</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
