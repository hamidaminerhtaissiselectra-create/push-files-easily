import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CityCard {
  name: string;
  slug: string;
  image: string;
}

const parisCities: CityCard[] = [
  { name: "Paris 1er", slug: "paris-1", image: "/images/zones/paris-1.webp" },
  { name: "Paris 2e", slug: "paris-2", image: "/images/zones/paris-2.webp" },
  { name: "Paris 3e", slug: "paris-3", image: "/images/zones/paris-3.webp" },
  { name: "Paris 4e", slug: "paris-4", image: "/images/zones/paris-4.webp" },
  { name: "Paris 5e", slug: "paris-5", image: "/images/zones/paris-5.webp" },
  { name: "Paris 6e", slug: "paris-6", image: "/images/zones/paris-6.webp" },
  { name: "Paris 7e", slug: "paris-7", image: "/images/zones/paris-7.webp" },
  { name: "Paris 8e", slug: "paris-8", image: "/images/zones/paris-8.webp" },
  { name: "Paris 9e", slug: "paris-9", image: "/images/zones/paris-9.webp" },
  { name: "Paris 10e", slug: "paris-10", image: "/images/zones/paris-10.webp" },
  { name: "Paris 11e", slug: "paris-11", image: "/images/zones/paris-11.webp" },
  { name: "Paris 12e", slug: "paris-12", image: "/images/zones/paris-12.webp" },
  { name: "Paris 13e", slug: "paris-13", image: "/images/zones/paris-13.webp" },
  { name: "Paris 14e", slug: "paris-14", image: "/images/zones/paris-14.webp" },
  { name: "Paris 15e", slug: "paris-15", image: "/images/zones/paris-15.webp" },
  { name: "Paris 16e", slug: "paris-16", image: "/images/zones/paris-16.webp" },
  { name: "Paris 17e", slug: "paris-17", image: "/images/zones/paris-17.webp" },
  { name: "Paris 18e", slug: "paris-18", image: "/images/zones/paris-18.webp" },
  { name: "Paris 19e", slug: "paris-19", image: "/images/zones/paris-19.webp" },
  { name: "Paris 20e", slug: "paris-20", image: "/images/zones/paris-20.webp" },
];

const idfCities: CityCard[] = [
  { name: "Boulogne-Billancourt", slug: "boulogne-billancourt", image: "/images/zones/boulogne.webp" },
  { name: "Neuilly-sur-Seine", slug: "neuillysur-seine", image: "/images/zones/neuilly.webp" },
  { name: "Levallois-Perret", slug: "levallois-perret", image: "/images/zones/levallois-perret.webp" },
  { name: "Courbevoie", slug: "courbevoie", image: "/images/zones/courbevoie.webp" },
  { name: "Saint-Denis", slug: "saint-denis", image: "/images/zones/saint-denis.webp" },
  { name: "Montreuil", slug: "montreuil", image: "/images/zones/montreuil.webp" },
  { name: "Créteil", slug: "creteil", image: "/images/zones/creteil.webp" },
  { name: "Versailles", slug: "versailles", image: "/images/zones/versailles.webp" },
  { name: "Vincennes", slug: "vincennes", image: "/images/zones/vincennes.webp" },
  { name: "Saint-Germain-en-Laye", slug: "saint-germainen-laye", image: "/images/zones/saint-germain-en-laye.webp" },
  { name: "Villejuif", slug: "villejuif", image: "/images/zones/villejuif.webp" },
  { name: "Ivry-sur-Seine", slug: "ivrysur-seine", image: "/images/zones/ivry-sur-seine.webp" },
];

const FIRST_ROW = 4;

const CityCardComponent = ({ city, index }: { city: CityCard; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.03 }}
  >
    <Link
      to={`/zones-intervention/reparation-volet-${city.slug}`}
      className="group block rounded-2xl overflow-hidden border border-border bg-card hover:border-accent card-shadow hover:card-shadow-hover transition-all duration-300"
    >
      <div className="relative h-36 overflow-hidden">
        <img
          src={city.image}
          alt={`Réparation volets roulants ${city.name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <h3 className="absolute bottom-3 left-3 text-base font-bold text-white drop-shadow-lg">
          {city.name}
        </h3>
      </div>
      <div className="p-3 flex items-center justify-between">
        <span className="text-xs text-muted-foreground font-medium">Intervention 24-48h</span>
        <ArrowRight className="h-3.5 w-3.5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </Link>
  </motion.div>
);

const IdfCitiesSection = () => {
  const [showMoreParis, setShowMoreParis] = useState(false);
  const [showMoreIdf, setShowMoreIdf] = useState(false);

  const parisFirstRow = parisCities.slice(0, FIRST_ROW);
  const parisRest = parisCities.slice(FIRST_ROW);
  const idfFirstRow = idfCities.slice(0, FIRST_ROW);
  const idfRest = idfCities.slice(FIRST_ROW);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <Badge variant="default" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-accent/10 text-accent border border-accent/20">
            <MapPin className="h-3.5 w-3.5" /> Villes desservies
          </Badge>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Nos Villes d'Intervention en Île-de-France
          </h2>
          <p className="text-muted-foreground">
            Découvrez nos pages dédiées pour chaque ville et arrondissement. Contenu personnalisé, témoignages locaux et services adaptés.
          </p>
        </motion.div>

        {/* Paris arrondissements */}
        <h3 className="font-display text-xl font-bold text-foreground mb-6">Arrondissements de Paris</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
          {parisFirstRow.map((city, i) => (
            <CityCardComponent key={city.slug} city={city} index={i} />
          ))}
        </div>
        {parisRest.length > 0 && (
          showMoreParis ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                {parisRest.map((city, i) => (
                  <CityCardComponent key={city.slug} city={city} index={i} />
                ))}
              </div>
              <div className="text-center mb-10">
                <Button onClick={() => setShowMoreParis(false)} variant="outline" size="sm" className="rounded-full border-accent/30 text-accent hover:bg-accent/10">
                  Masquer <ChevronUp className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center mb-10">
              <Button onClick={() => setShowMoreParis(true)} variant="outline" className="rounded-full border-accent/30 text-accent hover:bg-accent/10">
                Voir les {parisRest.length} autres arrondissements <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </div>
          )
        )}

        {/* Villes IDF */}
        <h3 className="font-display text-xl font-bold text-foreground mb-6 mt-8">Villes d'Île-de-France</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
          {idfFirstRow.map((city, i) => (
            <CityCardComponent key={city.slug} city={city} index={i} />
          ))}
        </div>
        {idfRest.length > 0 && (
          showMoreIdf ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                {idfRest.map((city, i) => (
                  <CityCardComponent key={city.slug} city={city} index={i} />
                ))}
              </div>
              <div className="text-center">
                <Button onClick={() => setShowMoreIdf(false)} variant="outline" size="sm" className="rounded-full border-accent/30 text-accent hover:bg-accent/10">
                  Masquer <ChevronUp className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center">
              <Button onClick={() => setShowMoreIdf(true)} variant="outline" className="rounded-full border-accent/30 text-accent hover:bg-accent/10">
                Voir les {idfRest.length} autres villes <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default IdfCitiesSection;
