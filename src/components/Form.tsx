"use client";
import { FormEvent, useState } from "react";
import { Button, TextField, Text, TextArea, View } from "reshaped";

const genericError = "Oh noes! Something went wrong, please try again";

export function Form() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [successMessage, setSuccessMessages] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(event.currentTarget.action, {
      method: event.currentTarget.method,
      body: new FormData(event.currentTarget),
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessages("Thank you, we'll get back to you ASAP!");
        } else {
          response.json().then((data) => {
            if (data.error === "Validation errors") {
              setError("Please provide a valid email adress");
              return;
            }
          });
          setError(genericError);
        }
      })
      .catch(() => {
        setError(genericError);
      });
  };

  return (
    <>
      {successMessage || (
        <form
          action="https://formspree.io/f/mpqlkpag"
          method="POST"
          onSubmit={onSubmit}
        >
          <View gap={4}>
            <Text variant="body-2" attributes={{ style: { minWidth: 400 } }}>
              Get in touch to schedule a meeting and discover how AEKPI can help
              your real estate company gain deeper insights into your portfolio,
              identify hidden opportunities, and unlock greater asset value.
              Together, we turn data into actionable strategies that drive
              smarter decisions and stronger returns.
            </Text>

            <TextField
              name="email"
              value={email}
              onChange={({ value }) => setEmail(value)}
              placeholder="your@email.com"
              hasError={!!error}
              inputAttributes={{ type: "email" }}
              variant="faded"
            />

            <TextArea
              name="message"
              value={message}
              onChange={({ value }) => setMessage(value)}
              placeholder="Message"
              hasError={!!error}
              variant="faded"
            />

            <Button
              size="small"
              color="primary"
              type="submit"
              disabled={!email}
            >
              Send
            </Button>

            {error && <Text color="critical">{error}</Text>}
          </View>
        </form>
      )}
    </>
  );
}
