import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { getWhatsAppBrochureUrl } from '../../constants';
import { Button } from '../ui/Button';
import { SectionTitle } from '../ui/SectionTitle';
import { RevealWrapper } from '../ui/RevealWrapper';

const STEPS = [
  'Vous vérifiez les disponibilités.',
  'Vous recevez la brochure et les premières informations par WhatsApp.',
  'Un conseiller vous rappelle pour comprendre votre événement.',
  'Nous validons ensemble la date, la configuration, les options et les prestataires.',
  "Vous recevez un lien Stripe pour sécuriser l'acompte.",
  'Votre réservation est confirmée.',
];

export function ReservationSteps() {
  const { scrollTo } = useSmoothScroll();
  const brochureUrl = getWhatsAppBrochureUrl();

  const handleBrochureClick = () => {
    if (brochureUrl) {
      window.open(brochureUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    scrollTo('#brochure-whatsapp');
  };

  return (
    <section id="reservation" className="bg-cream py-24 md:py-32 px-6 lg:px-12">
      <div className="max-w-[1100px] mx-auto">
        <RevealWrapper animation="fade-up">
          <SectionTitle
            tag="Parcours"
            title="Comment réserver le Domaine des Élégances ?"
            subtitle="Le parcours est pensé pour qualifier votre demande, confirmer les options utiles et sécuriser l'acompte uniquement après validation commerciale."
            align="center"
          />
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {STEPS.map((step, index) => (
            <RevealWrapper key={step} animation="fade-up" delay={index * 80}>
              <div className="h-full border border-stone bg-white px-6 py-7 rounded-sm">
                <p className="font-headline text-gold text-xs uppercase tracking-[0.24em] mb-5">
                  Étape {String(index + 1).padStart(2, '0')}
                </p>
                <p className="font-sans font-light text-warm leading-relaxed">
                  {step}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <div id="brochure-whatsapp" className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" onClick={() => scrollTo('#disponibilites')}>
            Vérifier les disponibilités
          </Button>
          <Button variant="secondary" size="lg" onClick={handleBrochureClick}>
            Recevoir la brochure WhatsApp
          </Button>
        </div>

        {!brochureUrl && (
          <p className="font-sans text-xs text-warm/60 text-center mt-5">
            Lien WhatsApp / WATI réel à renseigner dans la constante dédiée avant mise en production.
          </p>
        )}
      </div>
    </section>
  );
}
