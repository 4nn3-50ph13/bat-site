import { Canvas } from './Canvas';
import { ClearCanvasButton } from './ClearCanvasButton';
import React from 'react';
import Modal from '@material-ui/core/Modal';
import { CreateContainer, CreateH, CreateS, HelpBtn, Box1, Box2 } from './CreateElements';
import { CanvasProvider } from "./CanvasContext";
import { useTranslation } from 'react-i18next';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Help from './Help';

const CreateSection = () => {
  const { t } = useTranslation();
  const handleOpen = (continent) => {
    setOpen(true);
  };

  document.addEventListener('mousedown', e => {
      setOpen(false);
    });


  const [open, setOpen] = React.useState(false);
    return (
        <>
            <CreateContainer id="create">
            <HelpBtn onClick={handleOpen}>
                        <AiOutlineInfoCircle style={{
                            width: '100%',
                            height: '100%',
                            color: '#19181C',
                        }}/>
              </HelpBtn>
              <CreateH>{t('createH')}</CreateH>
              <CreateS>{t('createS')}</CreateS>
              <CanvasProvider>
                <Canvas/>
                <Box1 id="button-1a"><Box2><ClearCanvasButton/></Box2></Box1>
              </CanvasProvider>
            </CreateContainer>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="Help"
            >
                <Help/>
            </Modal>
        </>
    )
}

export default CreateSection;
