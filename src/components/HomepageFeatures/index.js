import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '模组开放下载',
    description: (
      <>
	    使用我们提供的安装工具一键下载，或自己动手安装模组框架与翻译模组。
      </>
    ),
  },
  {
    title: '月亮计划已经知悉本模组',
    description: (
      <>
	    月亮计划已在回信中言明不会因使用翻译模组导致账号封禁。相关内容请查看<a href="www.zeroasso.top/docs/community/minutes/firstContact">本公告</a>
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
