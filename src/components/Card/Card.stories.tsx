import {ComponentMeta, ComponentStory} from "@storybook/react";
import Card from "./Card";
import { CardType, BookingType } from "./Card";
import { MobileTariff, MobileUsage, MobileCost } from "../Stats/Stats.stories";
import {IoFlash} from "react-icons/io5";

export default {
    title: "Card",
    component: Card,
} as ComponentMeta<typeof Card>;
  
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const MobileCostStatsCard = Template.bind({});
MobileCostStatsCard.parameters = { viewport: { defaultViewport: "iphone5" } };
MobileCostStatsCard.args = {
    cardType: CardType.stats,
    children: <MobileCost {...MobileCost.args} />
};

export const MobileUsageStatsCard = Template.bind({});
MobileUsageStatsCard.parameters = { viewport: { defaultViewport: "iphone5" } };
MobileUsageStatsCard.args = {
    cardType: CardType.stats,
    children: <MobileUsage {...MobileUsage.args} />
};

export const MobileTariffStatsCard = Template.bind({});
MobileTariffStatsCard.parameters = { viewport: { defaultViewport: "iphone5" } };
MobileTariffStatsCard.args = {
    cardType: CardType.stats,
    children: <MobileTariff {...MobileTariff.args} />
};

export const MobileIconCard = Template.bind({});
MobileIconCard.parameters = { viewport: { defaultViewport: "iphone5" } };
MobileIconCard.args = {
    cardType: CardType.icon,
    children: <IoFlash />
};

export const IconCard = Template.bind({});
IconCard.args = {
    cardType: CardType.icon,
    children: <IoFlash />
};

export const BookingCardPlanned = Template.bind({});
BookingCardPlanned.args = {
    cardType: CardType.booking,
    bookingType: BookingType.planned,
    children: <div className="text-white">Planned</div>
};

export const BookingCardInProgress = Template.bind({});
BookingCardInProgress.args = {
    cardType: CardType.booking,
    bookingType: BookingType.inProgress,
    children: <div className="text-white">In Progress</div>
};

export const BookingCardComplete = Template.bind({});
BookingCardComplete.args = {
    cardType: CardType.booking,
    bookingType: BookingType.complete,
    children: <div className="text-white">Complete</div>
};

export const ColourThumbnailPlanned = Template.bind({});
ColourThumbnailPlanned.args = {
    cardType: CardType.colourThumbnail,
    bookingType: BookingType.planned,
};

export const ColourThumbnailInProgress = Template.bind({});
ColourThumbnailInProgress.args = {
    cardType: CardType.colourThumbnail,
    bookingType: BookingType.inProgress,
};

export const ColourThumbnailComplete = Template.bind({});
ColourThumbnailComplete.args = {
    cardType: CardType.colourThumbnail,
    bookingType: BookingType.complete,
};

