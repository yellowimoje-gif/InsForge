import { Builder } from 'xml2js';

const builder = new Builder({
  xmldec: { version: '1.0', encoding: 'UTF-8' },
  renderOpts: { pretty: false },
  headless: false,
});

export function toXml(root: Record<string, unknown>): string {
  return builder.buildObject(root);
}
