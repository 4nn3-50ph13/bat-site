import { useTranslation } from 'react-i18next';
import { Box1, Box2, Box3, ModalH1, ModalH3, ModalH4, ModalP, ModalContent } from './ExploreElements';

const Asie = () => {
    const { t } = useTranslation();
    return ( 
        <div className="modal" id="modal">
            <ModalH1>{t('asie')}</ModalH1>
            <div className="modalColumns">
                <div className="col1"><div className="cercle"><div className="image img1"></div></div>
            </div>
                <ModalContent>
                    <Box1>
                        <Box2>
                            <ModalH3>{t('asie_h3_1')}</ModalH3>
                        </Box2>
                        <Box3>
                            <ModalH4>{t('asie_h4_1')} :</ModalH4>
                            <ModalP>- {t('asie_p_1')}</ModalP>
                            <ModalP>- {t('asie_p_2')}</ModalP>
                            <ModalP>- {t('asie_p_3')}</ModalP>
                            <ModalH4>{t('asie_h4_2')} :</ModalH4>
                            <ModalP>- {t('asie_p_4')}</ModalP>
                            <ModalP>- {t('asie_p_5')}</ModalP>
                            <ModalP>- {t('asie_p_6')}</ModalP>
                            <ModalH4>{t('asie_h4_3')} :</ModalH4>
                            <ModalP>- {t('asie_p_7')}</ModalP>
                            <ModalP>- {t('asie_p_8')}</ModalP>
                            <ModalP>- {t('asie_p_9')}</ModalP>
                            <ModalH4>{t('asie_h4_4')} :</ModalH4>
                            <ModalP>- {t('asie_p_10')}</ModalP>
                            <ModalP>- {t('asie_p_11')}</ModalP>
                        </Box3>
                    </Box1>
                </ModalContent>
            </div>
            <div className="modalColumns">
                <div className="col1"><div className="cercle"><div className="image img2"></div></div>
            </div>
                <div id="modalContent">
                    <Box1>
                        <Box2>
                            <ModalH3>{t('asie_h3_1')}</ModalH3>
                        </Box2>
                        <Box3>
                            <ModalH4>{t('asie_h4_1')} :</ModalH4>
                            <ModalP>- {t('asie_p_1')}</ModalP>
                            <ModalP>- {t('asie_p_2')}</ModalP>
                            <ModalP>- {t('asie_p_3')}</ModalP>
                            <ModalH4>{t('asie_h4_2')} :</ModalH4>
                            <ModalP>- {t('asie_p_4')}</ModalP>
                            <ModalP>- {t('asie_p_5')}</ModalP>
                            <ModalP>- {t('asie_p_6')}</ModalP>
                            <ModalH4>{t('asie_h4_3')} :</ModalH4>
                            <ModalP>- {t('asie_p_7')}</ModalP>
                            <ModalP>- {t('asie_p_8')}</ModalP>
                            <ModalP>- {t('asie_p_9')}</ModalP>
                            <ModalH4>{t('asie_h4_4')} :</ModalH4>
                            <ModalP>- {t('asie_p_10')}</ModalP>
                            <ModalP>- {t('asie_p_11')}</ModalP>
                        </Box3>
                    </Box1>
                </div>
            </div>
        </div>
     );
}
 
export default Asie;