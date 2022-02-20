import React, { useState, useEffect, useCallback } from 'react';
import {
    Card,
    Label,
    MiddleElement,
    Advice,
    Container,
    Icon,
    DiceButton
} from '@/components';
import { getRandomAdviceSlip, getAdviceSlipById } from '@/apis';
import { Random } from '@/utils';
import clsx from 'clsx';

function App() {

    const [adviceSlip, setAdviceSlip] = useState();

    useEffect(() => {
        (async () => {
            const ret = await getRandomAdviceSlip();
            
            setAdviceSlip(ret);
        })();
    }, []);

    const buttonClickHandler = useCallback(() => {
        const nextAdviceNumber = Random.id();
        
        getAdviceSlipById(nextAdviceNumber)
            .then(res => setAdviceSlip(res));

    }, []);

    return (
        <Container className="h-[100vh]">
            <MiddleElement>
                <Card className="text-center pb-14 min-h-[210px]">
                    {adviceSlip && (
                        <>
                            <Label number={adviceSlip.slip.id}></Label>
                            <Advice>
                                <h1>&quot;{adviceSlip.slip.advice}&quot;</h1>
                            </Advice>
                        </>
                    )}
                    <div className="relative w-full h-4 overflow-hidden">
                        <Icon.Divider className="absolute left-1/2 bottom-0 -translate-x-1/2"></Icon.Divider>
                    </div>
                    <DiceButton
                        className={clsx(
                            'absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2',
                            'group hover:shadow-[0_0_20px_0_theme(colors.primary-green)]'
                        )}
                        onClick={buttonClickHandler}
                    />
                </Card>
            </MiddleElement>
        </Container>
    );
}

export default App;
