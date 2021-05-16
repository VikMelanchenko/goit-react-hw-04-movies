import PropTypes from 'prop-types';
import defaultImg from '../../images/defaul_img.png';

import styles from './cast.module.css';

export default function Cast({ characters }) {
  return (
    <>
      <div>
        {characters && (
          <ul className={styles.cards_wrap}>
            {characters.map((character) => (
              <li key={character.id} className={styles.card_box}>
                <div className={styles.card_thumb}>
                  <img
                    src={
                      character.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${character.profile_path}`
                        : defaultImg
                    }
                    alt={character.original_name}
                    // width={185}
                  />
                  <div className={styles.card_overlay}>
                    <p></p>
                  </div>
                </div>
                <div className={styles.card_content}>
                  <h3>{character.name}</h3>
                  <p>
                    <b>Character</b>: {character.character}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

Cast.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      character: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
