import { FontType } from './font-type';
import { FontSize } from './fontSize';

export class Font {

  private size: FontSize;
  private type: FontType;

  constructor(type: FontType, size: FontSize) {
    this.type = type;
    this.size = size;
  }

  getType(): FontType {
    return this.type;
  }

  getSize(): FontSize {
    return this.size;
  }

}
