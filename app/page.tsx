/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Calendar, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

export default function Home() {
  const [emphasizeButton, setEmphasizeButton] = useState(false);
  const [achievementsRef, achievementsApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    dragFree: true 
  });
  const [clinicRef, clinicApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    dragFree: true 
  });

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
    { 
      name: "General Dentistry", 
      description: "Comprehensive dental care including cleanings, fillings, and preventive treatments",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop&q=80"
    },
    { 
      name: "Cosmetic Dentistry", 
      description: "Transform your smile with veneers, whitening, and cosmetic procedures",
      image: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?w=800&auto=format&fit=crop&q=80"
    },
    { 
      name: "Orthodontics", 
      description: "Straighten your teeth with modern braces and clear aligners",
      image: "https://images.unsplash.com/photo-1601009171743-6dd4d0ce6ce7?w=800&auto=format&fit=crop&q=80"
    },
    { 
      name: "Oral Surgery", 
      description: "Expert surgical procedures including wisdom teeth removal and dental implants",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&auto=format&fit=crop&q=80"
    },
    { 
      name: "Pediatric Dentistry", 
      description: "Specialized dental care for children in a comfortable, friendly environment",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=80"
    }
  ];

  const locations = [
    {
      name: "32 Pearls Dental Clinic",
      address: "C-53 Kendriya Vihar Sector 56",
      phone: "9811107668",
      hours: "Mon-Sun: 6PM-8:30PM",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=123+Main+Street+Downtown",
    },
    {
      name: "Agrim Dental Clinic",
      address: "Shop No. 18 Sushant Tower Sector 56",
      phone: "9811107668",
      hours: "Mon-Sat: 11PM-1:30PM",
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
    window.location.href = 'tel:+15551234567';
  };

  const scrollToBooking = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setEmphasizeButton(true);
    setTimeout(() => {
      setEmphasizeButton(false);
    }, 4500); // Duration matches the 3 pulses (1.5s * 3)
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
          <h1 className="text-5xl font-bold mb-6">32 Pearls Dental Clinic</h1>
          <p className="text-xl mb-8">Advanced Care for Your Perfect Smile</p>
          <Button 
            id="booking-button"
            size="lg" 
            className={`bg-primary hover:bg-primary/90 ${emphasizeButton ? 'emphasis' : ''}`}
            onClick={handleBookAppointment}
          >
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 relative">
                  <img 
                    src={treatment.image} 
                    alt={treatment.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{treatment.name}</h3>
                  <p className="text-muted-foreground">{treatment.description}</p>
                </div>
              </Card>
            ))}
            <Card 
              className="overflow-hidden cursor-pointer hover:bg-secondary transition-colors"
              onClick={scrollToBooking}
            >
              <div className="h-full flex flex-col items-center justify-center p-6">
                <h3 className="text-xl font-semibold mb-3">More Treatments</h3>
                <ArrowRight className="h-8 w-8 text-primary" />
                <p className="text-muted-foreground text-center mt-3">
                  Click to schedule a consultation
                </p>
              </div>
            </Card>
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
              dragFree: true
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
              dragFree: true
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
              <span>9811107668</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2" />
              <span>drsandhyakakkar@yahoo.co.in</span>
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