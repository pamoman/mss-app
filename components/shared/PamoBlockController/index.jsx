/*
 * PamoBlockController
 *
 * @jsxImportSource @emotion/react
 */

import PamoWysiwyg from '@components/blocks/PamoWysiwyg';
import PamoImage from '@components/blocks/PamoImage';
import PamoSlideshow from '@components/blocks/PamoSlideshow';
import PamoVideo from '@components/blocks/PamoVideo';
import PamoStream from '@components/blocks/PamoStream';
import PamoPDF from '@components/blocks/PamoPDF';

const getBlockComponent = ({ __typename, ...rest }, index) => {
    let Block;

    switch(__typename) {
        case 'ComponentBlockWysiwyg':
            Block = PamoWysiwyg;
            break;
        
        case 'ComponentBlockImage':
            Block = PamoImage;
            break;

        case 'ComponentBlockSlideshow':
            Block = PamoSlideshow;
            break;
        
        case 'ComponentBlockVideo':
            Block = PamoVideo;
            break;

        case 'ComponentBlockStream':
            Block = PamoStream;
            break;
        
        case 'ComponentBlockPdf':
            Block = PamoPDF;
            break;
    }

    return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};

const PamoBlockController = ({ blocks }) => {
    return (
        <>
            {blocks.map((block, i) => <section key={`block-${i}`}>{getBlockComponent(block, i)}</section>)}
        </>
    );
};

export default PamoBlockController;