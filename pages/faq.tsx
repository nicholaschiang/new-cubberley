import React from 'react';
import Header from 'components/header';
import Footer from 'components/footer';
import Title from 'components/title';

import { CollapseGroup, Collapse } from 'components/collapse';

export default function FAQPage(): JSX.Element {
  return (
    <>
      <Header />
      <Title>FAQ</Title>
      <CollapseGroup>
        <Collapse title='Why is New Cubberley awesome?'>
          <p>
            Tempore accusantium ut voluptates non ab quo id fugit. <b>Minima est 
            quaerat modi nisi quisquam consequatur dolor ut.</b> Facilis dolorum 
            ex non similique. Quasi deserunt possimus eveniet omnis est laborum 
            voluptas et.
          </p>
          <p>
            Fuga doloribus ducimus fuga illo consequatur occaecati quidem iure. 
            Provident vitae quibusdam eaque consequuntur voluptas. Maxime ut ut 
            ad. Laudantium qui eaque et ipsum explicabo accusantium rerum.
          </p>
        </Collapse>
        <Collapse title='Who built such an awesome site for them?'>
          <p>
            Tempore accusantium ut voluptates non ab quo id fugit. Minima est 
            quaerat modi nisi quisquam consequatur dolor ut. Facilis dolorum ex 
            non similique. Quasi deserunt possimus eveniet omnis est laborum 
            voluptas et.
          </p>
          <p>
            Fuga doloribus ducimus fuga illo consequatur occaecati quidem iure. 
            Provident vitae quibusdam eaque consequuntur voluptas. Maxime ut ut 
            ad. Laudantium qui eaque et ipsum explicabo accusantium rerum.
          </p>
        </Collapse>
        <Collapse title='Where is New Cubberley located?'>
          <p>
            Tempore accusantium ut voluptates non ab quo id fugit. Minima est 
            quaerat modi nisi quisquam consequatur dolor ut. Facilis dolorum ex 
            non similique. Quasi deserunt possimus eveniet omnis est laborum 
            voluptas et.
          </p>
          <p>
            Fuga doloribus ducimus fuga illo consequatur occaecati quidem iure. 
            Provident vitae quibusdam eaque consequuntur voluptas. Maxime ut ut 
            ad. Laudantium qui eaque et ipsum explicabo accusantium rerum.
          </p>
        </Collapse>
      </CollapseGroup>
      <Footer />
    </>
  );
}
