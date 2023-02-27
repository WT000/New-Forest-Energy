import {ComponentMeta, ComponentStory} from "@storybook/react";
import Card from "./Card";
import { CardType } from "./Card";
import { MobileTariff, MobileUsage, MobileCost } from "../Stats/Stats.stories";


export default {
    title: "Card",
    component: Card,
} as ComponentMeta<typeof Card>;
  
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const MobileCostStatsCard = Template.bind({});
MobileCostStatsCard.parameters = { viewport: { defaultViewport: "iphone5" } };
MobileCostStatsCard.args = {
    cardType: CardType.stats,
    stats: <MobileCost {...MobileCost.args} />
};

export const MobileUsageStatsCard = Template.bind({});
MobileUsageStatsCard.parameters = { viewport: { defaultViewport: "iphone5" } };
MobileUsageStatsCard.args = {
    cardType: CardType.stats,
    stats: <MobileUsage {...MobileUsage.args} />
};

export const MobileTariffStatsCard = Template.bind({});
MobileTariffStatsCard.parameters = { viewport: { defaultViewport: "iphone5" } };
MobileTariffStatsCard.args = {
    cardType: CardType.stats,
    stats: <MobileTariff {...MobileTariff.args} />
};

