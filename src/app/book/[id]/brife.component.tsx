import React, { ReactElement } from "react";

type Props = {
  content: string;
};

export default async function BrifeComponent({
  content,
}: Props): Promise<ReactElement> {
  return new Promise((resolve) => {
    setTimeout((): void => {
      resolve(<>{content}</>);
    }, 5000);
  });
}
