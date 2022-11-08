import './Popup.css';

const Popup = (props) => {
    return (
        <div className="modal" id="modal">
            <h2>Verify</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe illo magni, in dolor ratione explicabo amet porro reprehenderit ea laboriosam deleniti praesentium nemo ut laborum error voluptatum blanditiis iure expedita sapiente quasi eum. Nesciunt saepe iure fugiat aut excepturi inventore nisi sed totam quae quia, repellendus debitis! Non, nesciunt.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe illo magni, in dolor ratione explicabo amet porro reprehenderit ea laboriosam deleniti praesentium nemo ut laborum error voluptatum blanditiis iure expedita sapiente quasi eum. Nesciunt saepe iure fugiat aut excepturi inventore nisi sed totam quae quia, repellendus debitis! Non, nesciunt.
            </p>
            <button className="btnClose" id="btnClose">X</button>

        </div>
    )
}

export default Popup;