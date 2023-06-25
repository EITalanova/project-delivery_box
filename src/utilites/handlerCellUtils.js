import cellS from '../assets/images/cellS.png';
import cellL from '../assets/images/cellL.png';
import cellM from '../assets/images/cellM.png';
import cellXS from '../assets/images/cellXS.png';
import cellXXS from '../assets/images/cellXXS.png';
import cellXXXL from '../assets/images/cellXXXL.png';
import cellXXL from '../assets/images/cellXXL.png';
import cellXL from '../assets/images/cellXL.png';

export const handlerCellData = (cells, sizeMappings) => {
  const newCells = cells
    .filter(cell => Object.keys(sizeMappings).includes(cell.type))
    .sort((a, b) => {
      const areaA = a.params.height * a.params.width;
      const areaB = b.params.height * b.params.width;

      if (areaA === areaB) {
        return b.params.width - a.params.width;
      }

      return areaA - areaB;
    });

  return newCells.map(cell => ({
    ...cell,
    name: sizeMappings[cell.type].name,
    isAvailable: cell.has_empty,
    cellWidth: Math.round(cell.params.width / 10),
    cellHeight: Math.round(cell.params.height / 10),
    height: sizeMappings[cell.type].height,
    width: sizeMappings[cell.type].width,
    icon: sizeMappings[cell.type].icon,
  }));
};

export const sizeMappings = {
  '200.0x110.0x405.0': { name: 'XXS', height: 80, width: 186, icon: cellXXS },
  '200.0x160.0x405.0': { name: 'XS', height: 116, width: 186, icon: cellXS },
  '380.0x110.0x405.0': { name: 'S', height: 132, width: 186, icon: cellS },
  '200.0x209.0x405.0': { name: 'M', height: 80, width: 240, icon: cellM },
  '380.0x160.0x405.0': { name: 'L', height: 116, width: 240, icon: cellL },
  '380.0x209.0x405.0': { name: 'XL', height: 132, width: 240, icon: cellXL },
  '645.0x210.0x405.0': {
    name: 'XXL',
    height: 140,
    width: 304,
    icon: cellXXL,
  },
  '645.0x365.0x405.0': {
    name: 'XXXL',
    height: 208,
    width: 304,
    icon: cellXXXL,
  },
};
