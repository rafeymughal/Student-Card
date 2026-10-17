function Props({ name, learning, status }) {
  return (
      <div class="notifications-container">
        <div class="error-alert">

          <div class="error-prompt-container">
            <p class="error-prompt-heading">Reuseable component + Props.
            </p><div class="error-prompt-wrap">
              <ul class="error-prompt-list" role="list">
                <li>{name}    </li>
                <li>{learning}</li>
                <br />
                {status === "active" ? <button className="button3"> {status}</button> : <button className="inactive-button"> {status}</button>}
              </ul>
            </div>
          </div>
        </div>
      </div>

  );
}
export default Props;