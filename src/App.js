import "@shopify/polaris/dist/styles.css";
import {
  TextField,
  Page,
  FormLayout,
  Form,
  Button,
  Card,
} from "@shopify/polaris";

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import clientsServices from "./services/clients.services";
import ReCAPTCHA from "react-google-recaptcha";

function App() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState();
  const [captcha, setCaptcha] = useState("");
  const [honeyPot, setHoneyPot] = useState("");
  const [hideButton, setHideButton] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    name: "",
  });

  const handleSubmit = () => {
    setHideButton(true);
    if (honeyPot !== "") {
      history.push("/thanks");
    }

    if (captcha === "") {
      setHideButton(false);
      alert("Captcha is required");
      return;
    }

    if (email === "") {
      setHideButton(false);
      setErrors({ ...setErrors, email: "Email is required!" });
      return;
    }

    if (name === "") {
      setHideButton(false);
      setErrors({ ...setErrors, name: "Name is required!" });
      return;
    }
    let fd = new FormData();
    fd.append("email", email);
    fd.append("name", name);
    fd.append("image", image);
    fd.append("g-recaptcha-response", captcha);

    clientsServices.subscribe(fd).then((status) => {
      if (status) {
        history.push("/thanks");
      }
      setHideButton(false);
    });

  };

  const onImageChange = (event) => {
    let images = event.target.files[0];
    setImage(images);
  };

  function onChange(value) {
    setCaptcha(value);
  }

  const handleEmailChange = (value) => {
    setEmail(value);
  };
  const handleNameChange = (value) => setName(value);
  const handleHoneyPotChange = (value) => setHoneyPot(value);

  return (
    <Page title="Basma Challenge">
      <Card title="Subscribe">
        <Card.Section>
          <Form>
            <FormLayout>
              <TextField
                value={email}
                onChange={handleEmailChange}
                label="Email"
                type="email"
                requiredIndicator="true"
                error={errors.email}
              />

              <TextField
                value={name}
                onChange={handleNameChange}
                label="Name"
                type="text"
                requiredIndicator="true"
                error={errors.name}
              />

              <input
                value={honeyPot}
                onChange={handleHoneyPotChange}
                type="text"
                hidden={true}
              />

              <h1>File Upload</h1>
              <input type="file" name="image" onChange={onImageChange} />

              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChange}
              />
              <div hidden={hideButton}>
                <Button type="button" onClick={handleSubmit}>
                  Subscribe
                </Button>
              </div>
            </FormLayout>
          </Form>
        </Card.Section>
      </Card>
    </Page>
  );
}

export default App;
