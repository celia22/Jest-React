import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const SummaryForm = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}> Terms and Conditions </span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          id="terms and conditions"
          type="checkbox"
          label={checkboxLabel}
          onChange={() => setIsButtonDisabled(!isButtonDisabled)}
        />
      </Form.Group>
      <Button variant="primary" disabled={isButtonDisabled}>
        Confirm order
      </Button>
    </Form>
  );
};

export default SummaryForm;
