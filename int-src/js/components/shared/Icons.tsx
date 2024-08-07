type IconProps = {
  title?: string
  classList?: string
}

export const ChevronLeftIcon = ({ title, classList }: IconProps) => {
  return (
    <svg className={classList} viewBox='-5.5 0 26 26'>
      {title && <title>{title}</title>}
      <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-423.000000, -1196.000000)' fill='currentColor'>
          <path d='M428.115,1209 L437.371,1200.6 C438.202,1199.77 438.202,1198.43 437.371,1197.6 C436.541,1196.76 435.194,1196.76 434.363,1197.6 L423.596,1207.36 C423.146,1207.81 422.948,1208.41 422.985,1209 C422.948,1209.59 423.146,1210.19 423.596,1210.64 L434.363,1220.4 C435.194,1221.24 436.541,1221.24 437.371,1220.4 C438.202,1219.57 438.202,1218.23 437.371,1217.4 L428.115,1209'></path>
        </g>
      </g>
    </svg>
  )
}

export const ChevronRightIcon = ({ title, classList }: IconProps) => {
  return (
    <svg className={classList} viewBox='-5.5 0 26 26'>
      {title && <title>{title}</title>}
      <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-474.000000, -1196.000000)' fill='currentColor'>
          <path d='M488.404,1207.36 L477.637,1197.6 C476.806,1196.76 475.459,1196.76 474.629,1197.6 C473.798,1198.43 473.798,1199.77 474.629,1200.6 L483.885,1209 L474.629,1217.4 C473.798,1218.23 473.798,1219.57 474.629,1220.4 C475.459,1221.24 476.806,1221.24 477.637,1220.4 L488.404,1210.64 C488.854,1210.19 489.052,1209.59 489.015,1209 C489.052,1208.41 488.854,1207.81 488.404,1207.36'></path>
        </g>
      </g>
    </svg>
  )
}

export const WindowsIcon = ({ title, classList }: IconProps) => {
  return (
    <svg className={classList} viewBox='0 0 20 20'>
      {title && <title>{title}</title>}
      <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-60.000000, -7439.000000)' fill='currentColor'>
          <g transform='translate(56.000000, 160.000000)'>
            <path d='M13.1458647,7289.43426 C13.1508772,7291.43316 13.1568922,7294.82929 13.1619048,7297.46884 C16.7759398,7297.95757 20.3899749,7298.4613 23.997995,7299 C23.997995,7295.84873 24.002005,7292.71146 23.997995,7289.71311 C20.3809524,7289.71311 16.7649123,7289.43426 13.1458647,7289.43426 M4,7289.43526 L4,7296.22153 C6.72581454,7296.58933 9.45162907,7296.94113 12.1724311,7297.34291 C12.1774436,7294.71736 12.1704261,7292.0908 12.1704261,7289.46524 C9.44661654,7289.47024 6.72380952,7289.42627 4,7289.43526 M4,7281.84344 L4,7288.61071 C6.72581454,7288.61771 9.45162907,7288.57673 12.1774436,7288.57973 C12.1754386,7285.96017 12.1754386,7283.34361 12.1724311,7280.72405 C9.44461153,7281.06486 6.71679198,7281.42567 4,7281.84344 M24,7288.47179 C20.3879699,7288.48578 16.7759398,7288.54075 13.1619048,7288.55175 C13.1598997,7285.88921 13.1598997,7283.22967 13.1619048,7280.56914 C16.7689223,7280.01844 20.3839599,7279.50072 23.997995,7279 C24,7282.15826 23.997995,7285.31353 24,7288.47179'></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

export const WebBrowserIcon = ({ title, classList }: IconProps) => {
  return (
    <svg className={classList} viewBox='0 0 32 32'>
      {title && <title>{title}</title>}
      <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-258.000000, -673.000000)' fill='currentColor'>
          <path d='M258,701 C258,703.209 259.791,705 262,705 L286,705 C288.209,705 290,703.209 290,701 L290,683 L258,683 L258,701 L258,701 Z M271,679 C270.448,679 270,678.553 270,678 C270,677.448 270.448,677 271,677 C271.552,677 272,677.448 272,678 C272,678.553 271.552,679 271,679 L271,679 Z M267,679 C266.448,679 266,678.553 266,678 C266,677.448 266.448,677 267,677 C267.552,677 268,677.448 268,678 C268,678.553 267.552,679 267,679 L267,679 Z M263,679 C262.448,679 262,678.553 262,678 C262,677.448 262.448,677 263,677 C263.552,677 264,677.448 264,678 C264,678.553 263.552,679 263,679 L263,679 Z M286,673 L262,673 C259.791,673 258,674.791 258,677 L258,681 L290,681 L290,677 C290,674.791 288.209,673 286,673 L286,673 Z'></path>
        </g>
      </g>
    </svg>
  )
}

export const ExternalLinkIcon = ({ classList }: IconProps) => {
  return (
    <svg className={classList} fill='currentColor' viewBox='0 0 16 16'>
      <title>External Link</title>
      <path
        d='M14 3.5L8.5 9 7 7.5 12.5 2H10V0h6v6h-2V3.5zM6 0v2H2v12h12v-4h2v6H0V0h6z'
        fillRule='evenodd'
      />
    </svg>
  )
}

export const PauseIcon = ({ title, classList }: IconProps) => {
  return (
    <svg className={classList} viewBox='0 0 24 24'>
      {title && <title>{title}</title>}
      <path
        d='M8 5V19M16 5V19'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const PlayIcon = ({ title, classList }: IconProps) => {
  return (
    <svg className={classList} viewBox='0 0 24 24' fill='none'>
      {title && <title>{title}</title>}
      <path
        d='M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinejoin='round'
      />
    </svg>
  )
}
