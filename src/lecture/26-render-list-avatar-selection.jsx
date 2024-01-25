import Avatar from '../components/Avatar/Avatar';
import contactData from '../data/contacts.json';

function Exercise() {
  // contactData.items [{ id, gender, name, face, ... }, ]
  const items = contactData.items.map((item) => item); // map 메서드 -> 새로운 배열
  console.log(Object.is(contactData.items, items)); // 복제해서 생성된 배열

  // function body 영역
  // 문, 식 모두 사용 가능

  return (
    /* JSX 영역에서는 식만 사용 가능 */
    <ul>
      {contactData.items.map(({ id, gender, face, name }) => {
        const photoUrl = `/images/faces/${gender}-0${face}.jpg`;

        // function body 영역
        // 문, 식 모두 사용 가능

        return (
          /* JSX 영역에서는 식만 사용 가능 */
          <li key={id}>
            <Avatar photo={photoUrl} name={name} isOnline={true} />
          </li>
        );
      })}
    </ul>
  );
}

export default Exercise;