import { Text } from '../components/uikit';

const fields = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
    required: true,
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    required: true,
  },
  {
    label: 'Phone',
    name: 'phone',
    type: 'text',
  },
  {
    label: 'Extension',
    name: 'ext',
    type: 'text',
  },
  {
    label: 'Country',
    name: 'country',
    type: 'text',
  },
  {
    label: 'City/Province',
    name: 'City_Province',
    type: 'text',
  },
];

export const accordionContent = [
  {
    header: 'Personal Information',
    content: (
      <fieldset>
        {fields.map((field, index) => (
          <p key={index}>
            <label htmlFor={field.name}>
              {field.label}
              <span aria-hidden='true'>*</span>:
            </label>
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              className={field.required ? 'required' : ''}
              aria-required={field.required}
            />
          </p>
        ))}
      </fieldset>
    ),
  },
  {
    header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    content: (
      <Text variant='body'>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
        abillo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
        autodit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </Text>
    ),
  },
];
