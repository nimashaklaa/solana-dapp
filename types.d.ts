import "next/document";

declare module "next/document" {
  class Document {
    static getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps>;
  }
}
