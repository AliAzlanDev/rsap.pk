import { ProgressBarLink } from '@/components/global/progress-bar'
import UsersIcon from '@/components/icons/users'
import { Button } from '@/components/ui/button'
import { CalendarIcon, FileTextIcon, ReaderIcon } from '@radix-ui/react-icons'

export const metadata = {
  title: 'Research',
  description:
    'RSAP is dedicated to advancing the field of radiology through research.',
}
export default function Research() {
  return (
    <div className='container-x py-20'>
      <div className=' prose dark:prose-invert prose-zinc mx-auto'>
        <h1 className=' !text-rsap'>Research at RSAP</h1>
        <p>
          Our{' '}
          <ProgressBarLink href={'/committees/research-and-publications'}>
            Research and Publications Committee (RPC)
          </ProgressBarLink>{' '}
          is dedicated to advancing the field of radiology through research.
        </p>
      </div>
      <h2 className=' text-3xl font-semibold text-center lg:text-4xl py-10'>
        Our Research Projects
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data.map((item) => (
          <div
            className='flex flex-col border shadow rounded-xl p-6 justify-between'
            key={item.title}
          >
            <div>
              <p className='font-medium'>{item.title}</p>

              {item.type && (
                <p className='mt-2 text-muted-foreground text-sm'>
                  <ReaderIcon className='mr-1 inline-flex size-4' />

                  {item.type}
                </p>
              )}
              {item.date && (
                <p className='mt-2 text-muted-foreground text-sm'>
                  <CalendarIcon className='mr-1 inline-flex size-4' />

                  {item.date}
                </p>
              )}
              {item.journal && (
                <p className='text-muted-foreground text-sm mt-2'>
                  <FileTextIcon className='mr-1 inline-flex size-4' />
                  {item.journal}
                </p>
              )}
              {item.authors && (
                <p className='mt-2 text-muted-foreground text-sm'>
                  <UsersIcon className='mr-1 inline-flex size-4' />

                  {item.authors.join(', ')}
                </p>
              )}
            </div>
            <a target='_blank' href={item.link} className=' mt-5'>
              <Button
                text={item.disabled ? 'In Progress' : 'Read More'}
                disabled={item.disabled}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

const data = [
  {
    title:
      'Addressing the shortcomings of radiology education in Pakistan: are medical schools doing enough?',
    disabled: true,
    type: 'Cross-sectional Study',
  },
  {
    title:
      'Abstract No. 620 Disparities in State-Level Utilization of Inferior Vena Cava Filters Among Medicare Part B Beneficiaries from 2013 to 2023',
    journal: 'Journal of Vascular and Interventional Radiology',
    authors: ['Talha Iqbal', 'Arsalan Nadeem', 'Ali Husnain', 'et al.'],
    type: 'Article',
    date: '2026-04',
    link: 'https://doi.org/10.1016/j.jvir.2026.108528',
  },
  {
    title:
      'Abstract No. 600 Trends in the Utilization of Anesthetic and Neurolytic Celiac Plexus Nerve Blocks in Medicare Part B Beneficiaries from 2000 to 2023',
    journal: 'Journal of Vascular and Interventional Radiology',
    authors: ['Arsalan Nadeem', 'Talha Iqbal', 'A. Klair', 'et al.'],
    type: 'Article',
    date: '2026-04',
    link: 'https://doi.org/10.1016/j.jvir.2026.108508',
  },
  {
    title:
      'Abstract No. 597 Trends in the State-Level Utilization of Percutaneous Kyphoplasty Among Medicare Part B Beneficiaries from 2015 to 2023',
    journal: 'Journal of Vascular and Interventional Radiology',
    authors: ['Talha Iqbal', 'Arsalan Nadeem', 'S. Ayaz', 'et al.'],
    type: 'Article',
    date: '2026-04',
    link: 'https://doi.org/10.1016/j.jvir.2026.108505',
  },
  {
    title:
      'Abstract No. 593 Trends in the Utilization of Percutaneous Vertebroplasty and Kyphoplasty Among Medicare Part B Beneficiaries from 2001 to 2022',
    journal: 'Journal of Vascular and Interventional Radiology',
    authors: ['Talha Iqbal', 'Arsalan Nadeem', 'S. Ayaz', 'et al.'],
    type: 'Article',
    date: '2026-04',
    link: 'https://doi.org/10.1016/j.jvir.2026.108501',
  },
  {
    title:
      'Abstract No. 575 State-Level Trends and Disparities in Transarterial Radioembolization Utilization by Medicare Part B Beneficiaries from 2013 to 2023',
    journal: 'Journal of Vascular and Interventional Radiology',
    authors: ['Arsalan Nadeem', 'Talha Iqbal', 'Dawood Javed', 'et al.'],
    type: 'Article',
    date: '2026-04',
    link: 'https://doi.org/10.1016/j.jvir.2026.108483',
  },
  {
    title:
      'Abstract No. 563 Trends in the Utilization of Transarterial Radioembolization in Medicare Part B Beneficiaries from 2007 to 2023',
    journal: 'Journal of Vascular and Interventional Radiology',
    authors: ['Arsalan Nadeem', 'Talha Iqbal', 'S. Ayaz', 'et al.'],
    type: 'Article',
    date: '2026-04',
    link: 'https://doi.org/10.1016/j.jvir.2026.108471',
  },
  {
    title:
      'Abstract No. 544 National Utilization Trends of Transcatheter Biopsies in Medicare Part B Beneficiaries from 2000 to 2023',
    journal: 'Journal of Vascular and Interventional Radiology',
    authors: [
      'Talha Iqbal',
      'Arsalan Nadeem',
      'Muhammad Bilal Sardar',
      'et al.',
    ],
    type: 'Conference Paper',
    date: '2026-03',
    link: 'https://doi.org/10.1016/j.jvir.2026.108452',
  },
  {
    title:
      'Abstract No. 520 Safety and Efficacy of Selective Arterial Embolization for Recurrent Hemarthrosis After Total Knee Arthroplasty: A Systematic Review and Meta-Analysis',
    journal: 'Journal of Vascular and Interventional Radiology',
    authors: [
      'Arsalan Nadeem',
      'Armaghan Ur Rehman',
      'Muhammad Bilal Sardar',
      'et al.',
    ],
    type: 'Conference Paper',
    date: '2026-03',
    link: 'https://doi.org/10.1016/j.jvir.2026.108428',
  },
  {
    title:
      'Abstract No. 343 Insights from the FDA MAUDE Database on Device- and Patient-Related Adverse Events in the Use of the AngioDynamics NanoKnife System for Irreversible Electroporation',
    journal: 'Journal of Vascular and Interventional Radiology',
    authors: ['Arsalan Nadeem', 'Talha Iqbal', 'Ayefa Naveed Klair', 'et al.'],
    type: 'Conference Paper',
    date: '2026-03',
    link: 'https://doi.org/10.1016/j.jvir.2026.108373',
  },
  {
    title:
      'Abstract No. 319 Radiofrequency Ablation Versus Beam Radiation for Localized Adenocarcinoma of the Lung in Older Adults: A SEER Comparative Survival Analysis',
    journal: 'Journal of Vascular and Interventional Radiology',
    authors: ['Arsalan Nadeem', 'Talha Iqbal', 'Ali Husnain', 'et al.'],
    type: 'Conference Paper',
    date: '2026-03',
    link: 'https://doi.org/10.1016/j.jvir.2026.108347',
  },
  {
    title:
      'Abstract No. 225 Insights from the FDA MAUDE Database on Adverse Events Related to the Use of Stent Retriever Mechanical Thrombectomy Devices for Acute Ischemic Stroke',
    journal: 'Journal of Vascular and Interventional Radiology',
    authors: ['Talha Iqbal', 'Arsalan Nadeem', 'Ayefa Naveed Klair', 'et al.'],
    type: 'Conference Paper',
    date: '2026-03',
    link: 'https://doi.org/10.1016/j.jvir.2026.108245',
  },
  {
    title:
      'Abstract No. 169 Trends in the Utilization of Transjugular Intrahepatic Portosystemic Shunt Insertion and Revision in Medicare Part B Beneficiaries from 2006 to 2023',
    journal: 'Journal of Vascular and Interventional Radiology',
    authors: ['Arsalan Nadeem', 'Talha Iqbal', 'Ali Husnain', 'et al.'],
    type: 'Conference Paper',
    date: '2026-03',
    link: 'https://doi.org/10.1016/j.jvir.2026.108186',
  },
  {
    title:
      'Abstract No. 157 Adverse Events and Device Failure Modes in Basivertebral Nerve Ablation Devices: A MAUDE Database Study',
    journal: 'Journal of Vascular and Interventional Radiology',
    authors: ['Arsalan Nadeem', 'Talha Iqbal', 'Ayefa Naveed Klair', 'et al.'],
    type: 'Conference Paper',
    date: '2026-03',
    link: 'https://doi.org/10.1016/j.jvir.2026.108173',
  },
  {
    title:
      'Abstract No. 133 Insights from the FDA MAUDE Database on the Adverse Events Related to the Use of Histotripsy Device for Liver Cancer',
    journal: 'Journal of Vascular and Interventional Radiology',
    authors: ['Talha Iqbal', 'Arsalan Nadeem', 'Shawal Ayaz', 'et al.'],
    type: 'Conference Paper',
    date: '2026-03',
    link: 'https://doi.org/10.1016/j.jvir.2026.108147',
  },
  {
    title:
      'Abstract No. 80 Efficacy of Yttrium-90 Radiation Segmentectomy for Ablative Treatment of Hepatocellular Carcinoma: A Systematic Review and Meta-Analysis',
    journal: 'Journal of Vascular and Interventional Radiology',
    authors: ['Arsalan Nadeem', 'Talha Iqbal', 'Dawood Javed', 'et al.'],
    type: 'Conference Paper',
    date: '2026-03',
    link: 'https://doi.org/10.1016/j.jvir.2026.108089',
  },
  {
    title:
      'Abstract No. 44 Oncologic and Functional Outcomes Following MRI-Guided Transurethral Ultrasound Ablation for Localized Prostate Cancer: A Systematic Review and Meta-Analysis',
    journal: 'Journal of Vascular and Interventional Radiology',
    authors: ['A. Nadeem', 'D. Javed', 'T. Iqbal', 'et al.'],
    type: 'Conference Abstract',
    date: '2026-04',
    link: 'https://doi.org/10.1016/j.jvir.2026.108051',
  },
  {
    title:
      'Abstract No. 32 Microwave Ablation Versus Laparoscopic Partial Nephrectomy for Localized Renal Cell Carcinoma: A Systematic Review and Meta-Analysis',
    journal: 'Journal of Vascular and Interventional Radiology',
    authors: ['A. Nadeem', 'D. Javed', 'T. Iqbal', 'et al.'],
    type: 'Conference Abstract',
    date: '2026-04',
    link: 'https://doi.org/10.1016/j.jvir.2026.108038',
  },
  {
    title:
      'Abstract No. 31 FEATURED ABSTRACT Thermal Ablation Versus Partial Nephrectomy for Localized Malignant Renal Cell Carcinoma in Older Adults: A SEER Database Propensity Score-Matched Analysis',
    journal: 'Journal of Vascular and Interventional Radiology',
    authors: ['A. Nadeem', 'T. Iqbal', 'A. Husnain', 'et al.'],
    type: 'Featured Conference Abstract',
    date: '2026-04',
    link: 'https://doi.org/10.1016/j.jvir.2026.108037',
  },
  {
    title:
      'Abstract No. 18 Comparative Survival Outcomes of Radioisotopes Plus Chemotherapy, Radiofrequency Ablation Plus Chemotherapy, and Resection in Localized Intrahepatic Cholangiocarcinoma: A SEER Database Study',
    journal: 'Journal of Vascular and Interventional Radiology',
    authors: ['A. Nadeem', 'T. Iqbal', 'S. Abu Zahra', 'et al.'],
    type: 'Conference Abstract',
    date: '2026-04',
    link: 'https://doi.org/10.1016/j.jvir.2026.108022',
  },
  {
    title:
      'Percutaneous cholecystolithotomy and lithotripsy for managing acute calculous cholecystitis in non-surgical candidates: a systematic review and meta-analysis',
    journal: 'Clinical Endoscopy',
    authors: [
      'Arsalan Nadeem',
      'Ali Husnain',
      'Aleena Ahmed',
      'Haider Ashfaq',
      'Hamza Ashraf',
      'Zain Ali Nadeem',
      'Khawaja Abdul Rehman',
      'Shahroze Ahmad',
      'Muhammad Rafay Shahzad Cheema',
    ],
    type: 'Meta-analysis',
    date: 'August 27, 2025',
    link: 'https://doi.org/10.5946/ce.2024.256',
  },
  {
    title:
      'The 100 Most Influential Papers on Yttrium-90 Transarterial Radioembolization for Primary and Secondary Liver Malignancies: A Bibliometric Analysis',
    journal: 'Journal of Vascular and Interventional Radiology',
    authors: [
      'A. Nadeem',
      'A. Husnain',
      'H. Ashraf',
      'M. Sardar',
      'A. Ahmed',
      'Z. Nadeem',
      'M. Serhal',
      'R. Lewandowski',
    ],
    type: 'Conference Abstract',
    date: 'March 2025',
    link: 'https://doi.org/10.1016/j.jvir.2024.12.070',
  },
  {
    title:
      'Microwave Ablation Versus Resection for Colorectal Cancer Liver Metastases: A Systematic Review and Meta-Analysis',
    journal: 'Journal of Vascular and Interventional Radiology',
    authors: [
      'A. Nadeem',
      'A. Husnain',
      'T. Mirza',
      'A. Ahmed',
      'D. Javed',
      'M. Sardar',
      'A. Hussain',
      'S. Almas',
      'A. Ahmed',
      'M. Serhal',
      'R. Lewandowski',
    ],
    type: 'Conference Abstract',
    date: 'March 2025',
    link: 'https://doi.org/10.1016/j.jvir.2024.12.494',
  },
  {
    title:
      'T5A-SPIR-9 Efficacy of Uterine Artery Embolization Using Gelatin Sponge Particles for the Treatment of Uterine Leiomyoma - A Systematic Review and Meta-Analysis',
    journal: 'RSNA Annual Meeting',
    authors: [
      'Ali Husnain',
      'Arsalan Nadeem',
      'Obaid Ur Rehman',
      'Zain Ali Nadeem',
      'Eeman Ahmad',
      'Umar Akram',
      'Eeshal Fatima',
    ],
    type: 'Presentation',
    date: 'December 2024',
    link: 'https://www.researchgate.net/publication/386506485_T5A-SPIR-9_EFFICACY_OF_UTERINE_ARTERY_EMBOLIZATION_USING_GELATIN_SPONGE_PARTICLES_FOR_THE_TREATMENT_OF_UTERINE_LEIOMYOMA_-_A_SYSTEMATIC_REVIEW_AND_META-ANALYSIS',
  },
  {
    title:
      'Salvage Stereotactic Radiotherapy for Nodal Oligo-recurrent Prostate Cancer: A Systematic Review and Meta-Analysis of Randomized Controlled Trials',
    journal: 'Clinical Genitourinary Cancer',
    authors: [
      'Ayesha Aman',
      'Arfa Akram',
      'Bisma Akram',
      'Ali Husnain',
      'Aleena Akram',
      'Sania Akram',
      'Eeman Ahmad',
      'Arsalan Nadeem',
    ],
    type: 'Meta-analysis',
    date: 'October 23, 2024',
    link: 'https://doi.org/10.1016/j.clgc.2024.102239',
  },
  {
    title:
      'Concurrent acute pancreatitis, pneumoperitoneum, pneumoretroperitoneum, and pneumomediastinum following ERCP-related perforation: A rare and insightful case study',
    journal: 'Radiology Case Reports',
    authors: [
      'Arsalan Nadeem',
      'Ali Husnain',
      'Dr. Tayyab Zia',
      'Abdullah Ahmed',
    ],
    type: 'Case Report',
    date: 'January 16, 2024',
    link: 'https://doi.org/10.1016/j.radcr.2023.12.064',
  },
  {
    title:
      'The Efficacy of Ketoconazole Containing Regimens in Castration-Resistant Prostate Cancer: A Systematic Review and Meta-Analysis',
    link: 'https://doi.org/10.1016/j.clgc.2024.01.003',
    authors: [
      'Obaid Ur Rehman',
      'Zain Ali Nadeem',
      'Eeshal Fatima',
      'Umar Akram',
      'Hiba Imran',
      'Ali Husnain',
      'Arsalan Nadeem',
      'Waqas Rasheed',
    ],
    journal: 'Clinical Genitourinary Cancer',

    date: 'January 09, 2024',
    type: 'Meta-analysis',
  },
]
