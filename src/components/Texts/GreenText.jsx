import PropTypes from 'prop-types';

export function GreenText({
    objHola,
    textGreen="Hola mundo",
    count,
    children//Codigo de react: etiquetas de html
}) {
    console.log(objHola);
    return (
        <div style={{
            background: "green"
        }}>
            <p>{textGreen} - {count}</p>
            { children }
        </div>
    );
}

GreenText.propTypes = {
    textGreen: PropTypes.string,
    objHola: PropTypes.object,
    count: PropTypes.number
}