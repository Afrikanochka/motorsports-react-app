import React from 'react';
import { Accordion } from 'react-bootstrap';
import '../../../styles/components/popularQuestions.scss';

const PopularQuestions = () => {
    return (
        <div className="container">
            <h2 className="questionTitle">
              popular questions
            </h2>
            <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>1. Scope</Accordion.Header>
    <Accordion.Body>
    1.1 The statutory warranty is completely excluded to the extent permitted by law.

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>2. Vehicle characteristics</Accordion.Header>
    <Accordion.Body>
    2.1 If the vehicle still has a current factory warranty, a sales representative (brand representative) of the manufacturer shall provide the services owed therein. If there is a factory warranty, the beginning of the warranty for new vehicles or vehicles with a current manufacturer's warranty is not the date of the first placing on the market, but the beginning of the warranty in the manufacturer's system or the contractually agreed beginning of the warranty, if any.

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>3. Warranty / guarantee</Accordion.Header>
    <Accordion.Body>
    3.1 The statutory warranty is completely excluded to the extent permitted by law.
    3.2 If the vehicle still has a current factory warranty, a sales representative (brand representative) of the manufacturer shall provide the services owed therein. If there is a factory warranty, the beginning of the warranty for new vehicles or vehicles with a current manufacturer's warranty is not the date of the first placing on the market, but the beginning of the warranty in the manufacturer's system or the contractually agreed beginning of the warranty, if any.
    3.3 If there is a special warranty insurance for the vehicle, this will take the place of the material warranty according to section 3.1 and replace it. In this case, the General Terms and Conditions of the respective warranty service provider apply.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>4. Trade-in vehicle</Accordion.Header>
    <Accordion.Body>
    4.1 The statutory warranty is completely excluded to the extent permitted by law.
    4.2 If the vehicle still has a current factory warranty, a sales representative (brand representative) of the manufacturer shall provide the services owed therein. If there is a factory warranty, the beginning of the warranty for new vehicles or vehicles with a current manufacturer's warranty is not the date of the first placing on the market, but the beginning of the warranty in the manufacturer's system or the contractually agreed beginning of the warranty, if any.
    4.3 If there is a special warranty insurance for the vehicle, this will take the place of the material warranty according to section 3.1 and replace it. In this case, the General Terms and Conditions of the respective warranty service provider apply.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header className="accordionBtn">5. Home Delivery</Accordion.Header>
    <Accordion.Body>
    5.1 If there is a special warranty insurance for the vehicle, this will take the place of the material warranty according to section 3.1 and replace it. In this case, the General Terms and Conditions of the respective warranty service provider apply.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header>6. Right of return</Accordion.Header>
    <Accordion.Body>
    6.1 The statutory warranty is completely excluded to the extent permitted by law.
    6.2 If the vehicle still has a current factory warranty, a sales representative (brand representative) of the manufacturer shall provide the services owed therein. If there is a factory warranty, the beginning of the warranty for new vehicles or vehicles with a current manufacturer's warranty is not the date of the first placing on the market, but the beginning of the warranty in the manufacturer's system or the contractually agreed beginning of the warranty, if any.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="6">
    <Accordion.Header>7. Written form</Accordion.Header>
    <Accordion.Body>
    7.1 If the vehicle still has a current factory warranty, a sales representative (brand representative) of the manufacturer shall provide the services owed therein. If there is a factory warranty, the beginning of the warranty for new vehicles or vehicles with a current manufacturer's warranty is not the date of the first placing on the market, but the beginning of the warranty in the manufacturer's system or the contractually agreed beginning of the warranty, if any.
    </Accordion.Body>
    <Accordion.Item eventKey="7">
    <Accordion.Header>8. Applicable law and place of jurisdiction</Accordion.Header>
    <Accordion.Body>
    8.1 The statutory warranty is completely excluded to the extent permitted by law.
    8.2 If the vehicle still has a current factory warranty, a sales representative (brand representative) of the manufacturer shall provide the services owed therein. If there is a factory warranty, the beginning of the warranty for new vehicles or vehicles with a current manufacturer's warranty is not the date of the first placing on the market, but the beginning of the warranty in the manufacturer's system or the contractually agreed beginning of the warranty, if any.
    8.3 If there is a special warranty insurance for the vehicle, this will take the place of the material warranty according to section 3.1 and replace it. In this case, the General Terms and Conditions of the respective warranty service provider apply.
    </Accordion.Body>
  </Accordion.Item>
  </Accordion.Item>
</Accordion>
        </div>
    );
}

export default PopularQuestions;