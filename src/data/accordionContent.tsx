export const accordionContent = [
  {
    header: 'Personal Information',
    content: (
      <fieldset>
        <p>
          <label htmlFor='cufc1'>
            Name
            <span aria-hidden='true'>*</span>:
          </label>
          <input
            type='text'
            value=''
            name='Name'
            id='cufc1'
            className='required'
            aria-required='true'
          />
        </p>
        <p>
          <label htmlFor='cufc2'>
            Email
            <span aria-hidden='true'>*</span>:
          </label>
          <input
            type='text'
            value=''
            name='Email'
            id='cufc2'
            aria-required='true'
          />
        </p>
        <p>
          <label htmlFor='cufc3'>Phone:</label>
          <input type='text' value='' name='Phone' id='cufc3' />
        </p>
        <p>
          <label htmlFor='cufc4'>Extension:</label>
          <input type='text' value='' name='Ext' id='cufc4' />
        </p>
        <p>
          <label htmlFor='cufc5'>Country:</label>
          <input type='text' value='' name='Country' id='cufc5' />
        </p>
        <p>
          <label htmlFor='cufc6'>City/Province:</label>
          <input type='text' value='' name='City_Province' id='cufc6' />
        </p>
      </fieldset>
    ),
  },
  {
    header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit aut fugit, sed quia consequuntur magni dolores eos qui ratione   voluptatem sequi nesciunt.',
  },
];
