import HeroSection from './HeroSection';
import PathwaysSection from './PathwaysSection';
import TimelineSection from './TimelineSection';
import QualificationsSection from './QualificationsSection';
import MaApplyModalProvider from './MaApplyModalProvider';

export default function MaProgram() {
  return (
    <div className="bg-white">
      <MaApplyModalProvider>
        <HeroSection />
        <PathwaysSection />
        <TimelineSection />
        <QualificationsSection />
      </MaApplyModalProvider>
    </div>
  );
}
