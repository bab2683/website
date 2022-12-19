import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

import { BackGroundElement } from 'components/background/element';
import Header from 'components/header/header';
import { ConfigTitlesByPageMap } from 'config/titles-by-page.map';

import styles from './layout.styles.scss?inline';

export default component$(() => {
  useStyles$(styles);
  const location = useLocation();

  return (
    <>
      <main>
        <BackGroundElement
          className='background'
          title={ConfigTitlesByPageMap.get(location.pathname)}
        ></BackGroundElement>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href='https://www.builder.io/' target='_blank'>
          Made with ♡ by Builder.io
        </a>
      </footer>
    </>
  );
});
