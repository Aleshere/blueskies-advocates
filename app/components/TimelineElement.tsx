import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { TiThMenu } from "react-icons/ti"

interface Props {
  position: string;
  title: string;
  date: string;
  description: string;
  background: string;
}

export default function TimelineElement({ position, title, date, description, background }: Props ) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} >
      <VerticalTimelineElement
            className="vertical-timeline-element--work !mb-12"
            contentStyle={{ background: background, color: '#fff' }}
            contentArrowStyle={{ borderRight: `7px solid ${background}` }}
            iconStyle={{ background: background, color: '#fff' }}
            icon={< TiThMenu />}
            visible={inView}
            position={position}
        >
            <h3 className="vertical-timeline-element-title underline">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle italic text-sm" >{date}</h4>
            <p>{description}</p>
      </VerticalTimelineElement>
    </div>
  );
}