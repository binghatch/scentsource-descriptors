import Button from '../components/Button';
import Card from '../components/Card'

const MaterialOverview = () => {
  const cas = "107-75-5";
  const ec = "203-518-7";
  const fema = "2583";
  const synonyms = [
    "3-phenylpropanal",
    "benzylacetaldehyde",
    "dihydrocinnamaldehyde",
    "Phenyl Propyl Aldehyde",
    "phenyl propionaldehyde",
    "phenyl propional"
  ];

  return (
    <div>
      <Card materialId='1234' name="Hydroxycitronellal" secondaryName="3,7-dimethyl-7-hydroxyoctanal" country="de">
        <div className='flex flex-col gap-6'>
            <div className='flex flex-row self-stretch items-start gap-16 text-sm'>
              <div>
                <h4 className='font-medium'>CAS-Number</h4>
                <p className='text-gray-400'>{cas}</p>
              </div>
              <div>
                <h4 className='font-medium'>EC-Number</h4>
                <p className='text-gray-400'>{ec}</p>
              </div>
              <div>
                <h4 className='font-medium'>FEMA</h4>
                <p className='text-gray-400'>{fema}</p>
              </div>
            </div>
            <div className='text-sm'>
              <h4 className='font-medium'>Common Synonyms</h4>
              <p className='text-gray-400'>{synonyms.join(", ")}</p>
            </div>
          </div>
          <div className='flex flex-row w-full justify-end items-center gap-2'>
            <Button variant="cancel">I don&apos;t know this material</Button>
            <Button variant="primary" icon="start">Start</Button>
          </div>
      </Card>
    </div>
  )
}

export default MaterialOverview