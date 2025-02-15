"use client";

import { useEffect } from "react";
import { MapPin, Phone, Mail, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

export default function Home() {
  const [achievementsRef, achievementsApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [clinicRef, clinicApi] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (achievementsApi && clinicApi) {
      const achievementsInterval = setInterval(() => {
        achievementsApi.scrollNext();
      }, 3000);

      const clinicInterval = setInterval(() => {
        clinicApi.scrollNext();
      }, 4000);

      return () => {
        clearInterval(achievementsInterval);
        clearInterval(clinicInterval);
      };
    }
  }, [achievementsApi, clinicApi]);

  const treatments = [
    { name: "General Dentistry", description: "Comprehensive dental care including cleanings, fillings, and preventive treatments" },
    { name: "Cosmetic Dentistry", description: "Transform your smile with veneers, whitening, and cosmetic procedures" },
    { name: "Orthodontics", description: "Straighten your teeth with modern braces and clear aligners" },
    { name: "Oral Surgery", description: "Expert surgical procedures including wisdom teeth removal and dental implants" },
  ];

  const locations = [
    {
      name: "32 Pearls",
      address: "C-53 Kendriya Vihar Sector 56 Gurgaon",
      phone: "9811107668",
      hours: "Mon-Sun: 6PM-8:30PM",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=123+Main+Street+Downtown",
    },
    {
      name: "Agrim Dental Clinic",
      address: "Sushant Tower Sector 56 Gurgaon",
      phone: "9811107668",
      hours: "Mon-Sat: 11AM-2PM",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=456+West+Avenue+Westside",
    },
  ];

  const achievements = [
    "Best Dental Clinic 2023",
    "Over 10,000 Satisfied Patients",
    "Advanced Digital Dentistry Center",
    "Top-Rated Emergency Dental Care",
  ];

  const clinicPhotos = [
    {
      url: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&auto=format&fit=crop&q=80",
      alt: "Dental Clinic Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80",
      alt: "Treatment Room"
    },
    {
      url: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&auto=format&fit=crop&q=80",
      alt: "Dental Equipment"
    }
  ];

  const openGoogleMaps = (url: string) => {
    window.open(url, '_blank');
  };

  const handleBookAppointment = () => {
    window.location.href = 'tel:9811107668';
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">Smile Bright Dental Clinic</h1>
          <p className="text-xl mb-8">Advanced Care for Your Perfect Smile</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleBookAppointment}>
            <Calendar className="mr-2 h-5 w-5" /> Book Appointment
          </Button>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-secondary px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card 
                key={index} 
                className="p-8 cursor-pointer transition-all hover:shadow-lg"
                onClick={() => openGoogleMaps(location.mapsUrl)}
              >
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <MapPin className="mr-2" />
                  {location.name}
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-center">
                    <span className="hover:text-primary transition-colors">
                      {location.address}
                    </span>
                  </p>
                  <p className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    {location.phone}
                  </p>
                  <p>{location.hours}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Treatments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((treatment, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-3">{treatment.name}</h3>
                <p className="text-muted-foreground">{treatment.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section with Auto-scroll */}
      <section className="py-20 bg-white px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <Carousel
            ref={achievementsRef}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {[...achievements, ...achievements].map((achievement, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                  <div className="text-center p-4">
                    <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <p className="font-semibold">{achievement}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Gallery Section with Auto-scroll */}
      <section className="py-20 bg-secondary px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Clinic</h2>
          <Carousel
            ref={clinicRef}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {[...clinicPhotos, ...clinicPhotos].map((photo, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="rounded-lg h-64 w-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center">
              <Phone className="mr-2" />
              <span>Emergency: (555) 999-9999</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2" />
              <span>info@smilebrightdental.com</span>
            </div>
            <Button size="lg" className="mt-6" onClick={handleBookAppointment}>
              <Calendar className="mr-2 h-5 w-5" /> Schedule Your Visit
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}