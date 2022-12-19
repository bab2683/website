import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

import { ConfigBackgroundByPageMap } from 'config/background-by-page.map';

import { BackgroundElementPropsInterface } from './element-props.interface';
import styles from './styles.scss?inline';

export const BackGroundElement = component$<BackgroundElementPropsInterface>(({ className, title }) => {
  useStylesScoped$(styles);
  const location = useLocation();

  return (
    <div
      class={`bg${className ? ` ${className}` : ''}`}
      style={{ backgroundImage: `url(${ConfigBackgroundByPageMap.get(location.pathname)})` }}
    >
      <div class='content'>
        <Slot />
      </div>
      {title ? <h1>{title}</h1> : null}
    </div>
  );
});
