import { Button } from "@radix-ui/themes";
import PropTypes from 'prop-types';
import React from "react";

export const ButtonIncrementar = ({ incrementar }) => {
    console.log("Desde button incrementar");
    return (
        <Button variant="soft" color="indigo" onClick={() => { incrementar(10) }}>
            Incrementar
        </Button>
    );
};

// Añadir propTypes al componente
ButtonIncrementar.propTypes = {
    incrementar: PropTypes.func.isRequired
};


export const CButtonIncrementar = React.memo(ButtonIncrementar)
