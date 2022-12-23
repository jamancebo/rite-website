<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u359945352_eyuMz' );

/** Database username */
define( 'DB_USER', 'u359945352_9z2kW' );

/** Database password */
define( 'DB_PASSWORD', 'eScanodBLt' );

/** Database hostname */
define( 'DB_HOST', 'mysql' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'Y+/6{OE:r6G+7#J}Rct<gwbC)V/>}Z~z}p~ty~W@u6E]%52V:%~p22a%VLrtg,e.' );
define( 'SECURE_AUTH_KEY',   '%e^Dk3uDDww9ad.{=2g[T2P`AL#Q+!Zz3,Ct(QF%&W*P|(H)!xZ!Zn)}8ZmiJ3T(' );
define( 'LOGGED_IN_KEY',     'FAGGJ:vt#:H}hP7FJub>&:)I?!u/H.$Fds2]U=)^ESroTO~_i9+M@I7ri;p.GJvg' );
define( 'NONCE_KEY',         'x@0|;<j~1VSOk|tWJV$0)-wb=ze<r^dGvVK mJf-y>n~NV!Mi;o)3bOoPN&v}NA^' );
define( 'AUTH_SALT',         'l{WvoeL]=0]**@tPwO]!bjIwdjFZnj}ycjG5Vv|V}5v[`XaUbjBZB1F$bu NJz&`' );
define( 'SECURE_AUTH_SALT',  'ZTkHonn_c@<_(OSs$QH9v@(Tg~U|Vc[=[&YKGz!:xv|VE-fL!k!$|v{lk>$-<@d@' );
define( 'LOGGED_IN_SALT',    'nn f-)[~XQbk(:F%1FbbP^ZwGl1$hs$}F$e92Q[d;Mx~P+uAuM!e|CRzTu,DNZE@' );
define( 'NONCE_SALT',        'Y;;o&9fhcU}O(mOS dqjxc[%T#O3=qelg$z<,TXc#~+8{u{i[Dzy{#Yh4G;,<%e$' );
define( 'WP_CACHE_KEY_SALT', '`k9)0B$R3g<^apPR/GnWI)$6)R3tuD{pXgaeZT/onz,&J$gk{L422U5yg&io2P5J' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
