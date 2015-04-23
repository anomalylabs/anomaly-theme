<?php namespace Anomaly\AnomalyTheme;

use Anomaly\Streams\Platform\Addon\AddonServiceProvider;

/**
 * Class AnomalyThemeServiceProvider
 *
 * @link          http://anomaly.is/streams-platform
 * @author        AnomalyLabs, Inc. <hello@anomaly.is>
 * @author        Ryan Thompson <ryan@anomaly.is>
 * @package       Anomaly\AnomalyTheme
 */
class AnomalyThemeServiceProvider extends AddonServiceProvider
{

    /**
     * The addon plugins.
     *
     * @var array
     */
    protected $plugins = [
        'Anomaly\AnomalyTheme\AnomalyThemePlugin'
    ];

}
 