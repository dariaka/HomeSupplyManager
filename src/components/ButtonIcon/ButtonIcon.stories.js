import React from 'react';
import { theme } from 'theme/mainTheme';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import arrowIcon from 'assets/back-arrow.svg';
import fridgeIcon from 'assets/fridge.svg';
import groceryIcon from 'assets/grocery.svg';
import lightbulbIcon from 'assets/lightbulb.svg';
import moreIcon from 'assets/more.svg';
import penIcon from 'assets/pen.svg';
import printIcon from 'assets/print.svg';
import settingsIcon from 'assets/settings.svg';
import shopIcon from 'assets/shop.svg';
import trashIcon from 'assets/trash.svg';

export default {
    title: 'Icon Button',
    component: ButtonIcon,
};

export const arrowLarge = () => <ButtonIcon size={theme.iconSize.l} icon={arrowIcon} />;

export const fridgeLarge = () => <ButtonIcon size={theme.iconSize.l} icon={fridgeIcon} />;

export const groceryLarge = () => <ButtonIcon size={theme.iconSize.l} icon={groceryIcon} />;

export const lightbulbLarge = () => <ButtonIcon size={theme.iconSize.l} icon={lightbulbIcon} />;

export const moreLarge = () => <ButtonIcon size={theme.iconSize.l} icon={moreIcon} />;

export const penLarge = () => <ButtonIcon size={theme.iconSize.l} icon={penIcon} />;

export const printLarge = () => <ButtonIcon size={theme.iconSize.l} icon={printIcon} />;

export const settingsLarge = () => <ButtonIcon size={theme.iconSize.l} icon={settingsIcon} />;

export const shopLarge = () => <ButtonIcon size={theme.iconSize.l} icon={shopIcon} />;

export const trashLarge = () => <ButtonIcon size={theme.iconSize.l} icon={trashIcon} />;
