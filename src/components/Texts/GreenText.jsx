import PropTypes from 'prop-types';

export function GreenText({
    objHola,
    textGreen="Hola mundo",
    count
}) {
    console.log(objHola);
    return (
        <div style={{
            background: "green"
        }}>
            <p>{textGreen} - {count}</p>
        </div>
    );
}

GreenText.propTypes = {
    textGreen: PropTypes.string,
    objHola: PropTypes.object,
    count: PropTypes.number
}