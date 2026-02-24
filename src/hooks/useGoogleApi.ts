import { useEffect, useState } from "react";

const DISCOVERY_DOC =
  "https://sheets.googleapis.com/$discovery/rest?version=v4";
const SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

interface GoogleSheetData {
  name: string;
  adress: string;
  url: string;
}

export function useGoogleSheetsApi() {
  const [gapiReady, setGapiReady] = useState(false);
  const [data, setData] = useState<GoogleSheetData>();

  function initClient() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";

    script.onload = () => {
      gapi.load("client", async () => {
        await gapi.client.init({
          apiKey: process.env.NEXTJS_PUBLIC_GOOGLE_API_KEY!,
          discoveryDocs: [DISCOVERY_DOC],
          clientId: process.env.NEXTJS_PUBLIC_GOOGLE_CLIENT_ID,
          scope: SCOPES,
        });

        setGapiReady(true);
      });
    };

    document.body.appendChild(script);
  }

  useEffect(() => {
    initClient();
  });

  useEffect(() => {
    if (!gapiReady) {
      return;
    }

    gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: "10qzwtNfVLjjjcCqXtHjpxJgPrViIrK57AnM-3pSKQyg",
        range: "Simulator!A2:E",
        apiKey: process.env.NEXTJS_PUBLIC_GOOGLE_API_KEY!,
      })
      .then((response) => {
        console.log(response);
      });
  }, [gapiReady]);

  const getTenantData = () => {
    return null;
  };

  return { getTenantData };
}
