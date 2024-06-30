import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { TiThMenu } from "react-icons/ti"

interface Props {
  position: string;
  title: string;
  date: string;
  description: any;
  background?: any;
  color?: any;
}

export default function TimelineElement({ position, title, date, description, background = '#fff8dc', color = "#000" }: Props ) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} >
      <VerticalTimelineElement
            className="vertical-timeline-element--work !mb-12"
            contentStyle={{ background: background, color: color }}
            contentArrowStyle={{ borderRight: `7px solid ${background}` }}
            iconStyle={{ background: background, color: color }}
            icon={< TiThMenu />}
            visible={inView}
            position={position}
        >
            <h3 className="vertical-timeline-element-title underline font-bold">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle italic text-sm" >{date}</h4>
            <p>{description}</p>
      </VerticalTimelineElement>
    </div>
  );
}