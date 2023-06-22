import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '使用本模组完全免费',
    description: (
      <>
	    一分钱都不用花费，就可以得到本汉化补丁。
      </>
    ),
  },
  {
    title: '本模组已获得官方认可',
    description: (
      <>
	    月亮计划官方已声明不会对汉化模组封号。相关内容请查看<a href="https://github.com/orgs/LocalizeLimbusCompany/discussions/70">本公告</a>
      </>
    ),
  },
  {
    title: '社区支持',
    description: (
      <>
        我们是为了社区而工作的人！我们使用了MIT协议。
      </>
    ),
  },
];

function Feature({title, description}) {
    return (
      <div className={clsx('col col--4')}>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  export default function HomepageFeatures() {
    return (
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    );
  }
