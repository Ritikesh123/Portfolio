import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import ecommerce from '../assets/ecommercewithfilter.png';
import product from '../assets/productLogin.png';
import car from '../assets/Car_visit.png';
import food from '../assets/Food-delivery234.png';
import validation from '../assets/Formik-yup-validationform.png';
import todo from '../assets/todoList.png';
import registration from '../assets/Registration-form.png';

const projects = [
  ['01', 'E-commerce discovery', 'Product filtering and cart experience', ecommerce, 'https://ecommerce-with-filter.netlify.app/', 'https://github.com/Ritikesh123/E-Commerce-Cart-or-Filter'],
  ['02', 'Product authentication', 'Login flow with product browsing', product, 'https://productlogin.netlify.app/', 'https://github.com/Ritikesh123/Auth-login_with-Product'],
  ['03', 'Car classifieds', 'Responsive vehicle discovery interface', car, 'https://carvisit.netlify.app/', 'https://github.com/Ritikesh123/car-classified'],
  ['04', 'Food delivery', 'React-based ordering experience', food, 'https://food-delivery234.netlify.app/', 'https://github.com/RitikeshRaj-RR/namaste-react'],
  ['05', 'Formik validation', 'Accessible form validation patterns', validation, 'https://formik-yup-validationform.netlify.app/', 'https://github.com/RitikeshRaj-RR/Validation-formik_yup'],
  ['06', 'React todo list', 'Focused task management UI', todo, 'https://react-todolist234.netlify.app/', 'https://github.com/RitikeshRaj-RR/react-Todo'],
  ['07', 'Registration form', 'Clean, responsive registration flow', registration, 'https://normal-registration-form.netlify.app/', 'https://github.com/RitikeshRaj-RR/registration-form'],
];

export default function Portfolio() {
  return (
    <section id="work" name="work" className="mesh-light border-t hairline py-24 md:py-32">
      <div className="section-shell">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div><p className="eyebrow">02 / Selected work</p><h2 className="display mt-5 text-5xl font-extrabold md:text-7xl">Made to<br />be useful.</h2></div>
          <p className="hidden max-w-xs text-sm leading-6 text-[#686b73] md:block">Enterprise platforms and frontend systems shaped by scale, performance and a strong product instinct.</p>
        </div>
        <div className="grid gap-x-7 gap-y-14 md:grid-cols-2">
          {projects.map(([number, title, detail, image, url, code]) => (
            <article key={number} className="group">
              <a href={url} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-2xl bg-[#e9e9e5]"><img src={image} alt={title} className="aspect-[1.45] w-full object-cover transition duration-500 group-hover:scale-105" /></a>
              <div className="mt-4 flex items-start justify-between gap-4"><div><p className="eyebrow">{number}</p><h3 className="mt-2 text-xl font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#686b73]">{detail}</p></div><div className="flex gap-3 pt-1"><a aria-label={`${title} live demo`} href={url} target="_blank" rel="noreferrer"><FiArrowUpRight /></a><a aria-label={`${title} source code`} href={code} target="_blank" rel="noreferrer" className="text-xs font-bold">Code</a></div></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
